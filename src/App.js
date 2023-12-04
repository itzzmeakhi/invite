import React, { useEffect, useState } from 'react';
import { logEvent } from 'firebase/analytics';
import { collection, getDocs } from 'firebase/firestore';

import Home from './components/Home/Home';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Spinner from './components/Spinner/Spinner';
import Videos from './components/Videos/Videos';
import Live from './components/Live/Live';

import { analytics, db } from './firebase.config';

import './App.css';

const App = () => {
  const [ spinner, setSpinner ] = useState(true);
  const [ config, setConfig ] = useState({});

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);

    const getLayoutConfig = async () => {
      const doc_refs = await getDocs(collection(db, 'invite'));
      const res = [];
      doc_refs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        });
      });
      setConfig(res[0]);
      logEvent(analytics, 'page-loaded');
      setSpinner(false);
    };
    getLayoutConfig();
  }, []);

  console.log('=> config', config);
  const { live, videoplayer, videos } = config;
  return (
    <div className='app'>
      {spinner ? <Spinner /> : (
        <>
          <Home />
          {live?.displayLiveVideo && <Live {...live} />}
          {videoplayer?.showComponent && <VideoPlayer {...videoplayer} />}
          <Videos {...videos} />
          <Intro />
          <Map />
        </>
      )}
    </div>
  );
};

export default App;
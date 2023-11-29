import React, { useEffect, useState } from 'react';
import { logEvent } from 'firebase/analytics';

import Home from './components/Home/Home';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Spinner from './components/Spinner/Spinner';
import Videos from './components/Videos/Videos';

import { analytics } from './firebase.config';

import './App.css';

const App = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
    logEvent(analytics, 'page-loaded');
  }, []);
  return (
    <div className='app'>
      {spinner ? <Spinner /> : (
        <>
          <Home />
          <VideoPlayer />
          <Videos />
          <Intro />
          <Map />
        </>
      )}
    </div>
  );
};

export default App;
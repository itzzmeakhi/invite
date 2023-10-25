import React, { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Spinner from './components/Spinner/Spinner';

import './App.css';

const App = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500)
  }, []);
  return (
    <div className='app'>
      {spinner ? <Spinner /> : (
        <>
          <Home />
          <VideoPlayer />
          <Intro />
          <Map />
        </>
      )}
    </div>
  );
};

export default App;
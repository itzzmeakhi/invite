import React from 'react';

import Home from './components/Home/Home';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Home />
      <VideoPlayer />
      <Intro />
      <Map />
    </div>
  );
};

export default App;
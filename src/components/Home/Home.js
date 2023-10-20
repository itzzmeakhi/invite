import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <p className='hashtag'>#GV</p>
      <div className='text-section'>
        <h1>Gowtham <span>weds</span> Vidya</h1>
        <p className='para-txt'>We're getting married on</p>
        <p>15th December 2023</p>
      </div>
    </div>
  );
};

export default Home;
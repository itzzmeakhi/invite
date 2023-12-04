import React from 'react';

import clip from './../../assets/story.mp4';

import './CountdownStory.css';

const CountdownStory = () => {
  return (
    <div className='countdownstory'>
      <video autoPlay loop playsInline muted>
        <source src={clip} type="video/mp4" />
      </video>
    </div>
  );
};

export default CountdownStory;
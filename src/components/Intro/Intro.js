import React from 'react';

import groomImg from './../../assets/groom.JPG';
import brideImg from './../../assets/bride.JPG';

import './Intro.css';

const Intro = () => {
  return (
    <div className='intro-section'>
      <div className='groom'>
        <img src={groomImg} alt='Gowtham' />
        <p>#Groom</p>
      </div>
      <div className='bride'>
        <p>#Bride</p>
        <img src={brideImg} alt='Vidya' />
      </div>
    </div>
  );
};

export default Intro;
import React from 'react';

import Countdown from '../Countdown/Countdown';

import saveTheDateImg from './../../assets/savethedate.png';

import './VideoPlayer.css';

const VideoPlayer = () => {
  return ( 
    <div className='video-player'>
      <div className='desc'>
        <img src={saveTheDateImg} alt='save the date' />
        <p>the countdown is on!!</p>
        <h3> 15 December, 2023 </h3>
      </div>
      <Countdown deadline='December, 16, 2023 03:54:00 AM' />
      <div className='video-responsive'>
        <iframe
          id='savethedate'
          title='savethedate'
          width='640' 
          height='360'
          allowFullScreen='allowFullScreen'
          frameBorder='0'
          src='https://www.youtube.com/embed/scwu2MTjRMU?rel=0&controls=1&modestbranding=0&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0&autoplay=0&enablejsapi=1'
          frameborder='0'
        ></iframe>
      </div>
      <div className='text-section'>
        <p> You're are cordially invited to join us... </p>
        <p> On our blissful union and make our day! </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
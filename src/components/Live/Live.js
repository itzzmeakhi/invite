import React from 'react';

import './Live.css';

const Live = ({ src, subtitle }) => {
  return ( 
    <div className='live'>
      <div className='desc'>
        <h3> Watch Live... </h3>
        <p>{subtitle}</p>
      </div>
      <div className='video-responsive'>
        <iframe
          id='live'
          title='Gowtham & Vidya Wedding Ceremony Live'
          width='640' 
          height='360'
          allowFullScreen="allowFullScreen"
          src={`https://www.youtube.com/embed/${src}?rel=0&controls=1&playsinline=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0&autoplay=0&enablejsapi=1`}
          frameborder='0'
        ></iframe>
      </div>
    </div>
  );
};

export default Live;
import React from 'react';

import './Videos.css';

const Videos = () => {
  return ( 
    <div className='videos'>
      <div className='video'>
        <div className='desc'>
          <h3> Engagement Highlights </h3>
        </div>
        <div className='video-responsive'>
          <iframe
            id='engagementhighlights'
            title='engagementhighlights'
            width='640' 
            height='360'
            allowFullScreen="allowFullScreen"
            src='https://www.youtube.com/embed/XFuKWLwcIZg?rel=0&controls=1&playsinline=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0&autoplay=0&enablejsapi=1'
            frameborder='0'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
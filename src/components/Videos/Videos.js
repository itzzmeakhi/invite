import React from 'react';

import './Videos.css';

const Videos = ({ list=[] }) => {
  return ( 
    <div className='videos'>
      {list.map(video => {
        return video.isShown ? (
          <div className='video'>
            <div className='desc'>
              <h3> {video.header} </h3>
            </div>
            <div className='video-responsive'>
              <iframe
                id='engagementhighlights'
                title='engagementhighlights'
                width='640' 
                height='360'
                allowFullScreen="allowFullScreen"
                src={`https://www.youtube.com/embed/${video.src}?rel=0&controls=1&playsinline=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0&autoplay=0&enablejsapi=1`}
                frameborder='0'
              ></iframe>
            </div>
          </div>
        ) : null
      })}
    </div>
  );
};

export default Videos;
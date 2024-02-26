import React, { useState } from 'react';

import './CountdownStory.css';

const CountdownStory = ({ path }) => {
  const [videoPath, setVideoPath] = useState('');

  (function (video) {
    import(
      `./../../assets/${video}.mp4`
    ).then((vid) => setVideoPath(vid.default));
  })(path);
  
  return (
    <div className='countdownstory'>
      <video key={videoPath} autoPlay loop playsInline muted>
        <source src={videoPath} type="video/mp4" />
      </video>
    </div>
  );
};

export default CountdownStory;
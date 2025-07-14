// src/components/BackgroundVideo.js
import React from 'react';

function BackgroundVideo() {
  return (
    <video autoPlay muted loop className="background-video">
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" height="100vh"/>
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;

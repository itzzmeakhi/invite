import React from 'react';

import './Map.css';

const Map = () => {
  return (
    <div className="mapouter">
      <h3 className='header'>Venue</h3>
      <div className="gmap_canvas"> 
        <iframe title="msr function hall" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.512861010163!2d81.99649907569875!3d16.949305115276584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a379a80d696a059%3A0x4e033447333a6120!2sMSR%20Function%20Hall%20Balabhadrapuram!5e0!3m2!1sen!2sin!4v1697727963243!5m2!1sen!2sin" width="90%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;
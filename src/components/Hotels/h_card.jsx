import React, { useState, useEffect } from "react";


function Card({ title,location, backgroundImage, hotelId, onCheckAvailability,hotelLocation }) {
  const [availabilityClicked, setAvailabilityClicked] = useState(false);

  const handleCheckAvailabilityClick = () => {
    onCheckAvailability(hotelId,title, hotelLocation);
    setAvailabilityClicked(true);
  };

  useEffect(() => {
  
    if (availabilityClicked) {
      const timeoutId = setTimeout(() => {  
        const toButton = document.getElementById('toButton');
        toButton && toButton.click();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [availabilityClicked]);

  return (
    <div className="cardStyle">
      <div className="cd">
        <img
          src={backgroundImage}
          alt={title}
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="textStyle">
        <h1>{title}</h1>
        <p>{location}</p>

        <div>
          <button onClick={handleCheckAvailabilityClick}>Check Availability</button>
          <a href="/ht" to='/ht' id="toButton" style={{ display: 'none' }}>to</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

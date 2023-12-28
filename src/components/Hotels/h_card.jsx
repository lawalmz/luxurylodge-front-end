import React from "react";



function Card({ title, description, backgroundImage, hotelId, onCheckAvailability }) {
  const handleCheckAvailabilityClick = () => {
    onCheckAvailability(hotelId);
  };

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
        <p>{description}</p>
        <a href="/ht"><button onClick={handleCheckAvailabilityClick}>Check Availability</button></a> 
      </div>
    </div>
  );
}

export default Card;

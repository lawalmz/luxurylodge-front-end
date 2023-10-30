import React from "react";

function Cards(props) {
  const cardStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    height: '300px', // Height as a string
    backgroundSize: 'cover', // Changed to camelCase
    backgroundPosition: 'center', // Changed to camelCase
  };
  
  return (
    <div className={`card ${props.darkMode ? "dark" : ""}`} style={cardStyle}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Cards;

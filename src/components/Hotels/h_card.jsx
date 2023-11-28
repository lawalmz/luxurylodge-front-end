import React from "react";


function Card(props) {
 


  return (
    <div className="cardStyle"  >
      <div >
        {/* Image on the left */}
        <img
          src={props.backgroundImage}
          alt={props.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="textStyle">
        <h1 >{props.title}</h1>
        <p >{props.description}</p>
        <button >Check Availability</button>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function Hero({ darkMode }) {
  return (

    <div className={`hero ${darkMode ? "dark" : ""}`}>
      <video preload="auto" autoPlay loop muted playsInline className="back-video">
        <source src="images/video.mp4" type="video/mp4" />
      </video>

      <div className={`content ${darkMode ? "dark" : ""}`}>
        <h1 className={`h ${darkMode ? "dark" : ""}`} >Luxury Lodges</h1>
        <p>Hotel Reservation System</p>
        <p>Extraordinary five-star out-door activities</p>
        <a href="#">Get Started</a>
      </div>
    </div>
   
  );
}

export default Hero;

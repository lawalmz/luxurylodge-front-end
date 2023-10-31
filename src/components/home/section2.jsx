import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import cardsData from "./data.js"
function Section2({ darkMode,cardsData,heading,caption }) {
  const [currentIndex, setCurrentIndex] = useState(0);





  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
          
        },
      },
    ],
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`section ${darkMode ? "dark" : ""}`}>
      <h1>{heading}</h1>
      <p>
        {caption}
      </p>

      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="carousel-item">
            <Cards
              darkMode={darkMode}
              title={card.title}
              description={card.description}
              backgroundImage={card.backgroundImage}
              
              style={{
                flex: "0 0 300px",
                margin: "0 10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Section2;
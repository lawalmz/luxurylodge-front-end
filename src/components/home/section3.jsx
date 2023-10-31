import React from "react";


function Section({ darkMode }) {

  const imageUrl = darkMode
  ? "../../images/dark_logo.jpg" // Image URL for dark mode
  : "../../images/logo2.jpg"; // Image URL for normal mode
  return (
    <div className={`section ${darkMode ? "dark" : ""}`}>
      <div className={`Pcontainer ${darkMode ? "dark" : ""}`}>
        <img
            src={imageUrl}
            alt="Luxury Lodge"
            className="section3-img"
          />
        <div class= {`vertical-line ${darkMode ? "dark" : ""}`}></div>
        <div class="text">
          <h1>LuxuryLodges: Timeless Luxury, Unforgettable Adventures!</h1>
          <p>Explore our world of exceptional hospitality and discover your dream escape today. Indulge in opulence, immerse in comfort, and create memories that last a lifetime. Experience our world-class hospitality and embark on a journey of discovery and relaxation. Book your extraordinary getaway with LuxuryLodges today and let us redefine your idea of luxury.</p>
        </div>
      </div>
    </div>
  );
}

export default Section;

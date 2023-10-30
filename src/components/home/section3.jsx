import React from "react";


function Section({ darkMode }) {
  return (
    <div className={`part ${darkMode ? "dark" : ""}`}>
      <div className={`Pcontainer ${darkMode ? "dark" : ""}`}>
        <div className={`section3-img ${darkMode ? "dark" : ""}`}></div>
        <div class="vertical-line"></div>
        <div class="text">
          <h1>LuxuryLodges: Timeless Luxury, Unforgettable Adventures!</h1>
          <p>Explore our world of exceptional hospitality and discover your dream escape today. Indulge in opulence, immerse in comfort, and create memories that last a lifetime. Experience our world-class hospitality and embark on a journey of discovery and relaxation. Book your extraordinary getaway with LuxuryLodges today and let us redefine your idea of luxury.</p>
        </div>
      </div>
    </div>
  );
}

export default Section;

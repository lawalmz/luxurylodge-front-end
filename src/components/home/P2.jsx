import React, { useState, useEffect } from "react";

function P({ darkMode }) {
  return (
    <div className={`part ${darkMode ? "dark" : ""}`}>
      
      <div className={`Pcontainer ${darkMode ? "dark" : ""}`}>
  <div  className={`image ${darkMode ? "dark" : ""}`}>  </div>
  <div class="vertical-line"></div>
  <div class="text">
    <h1>LuxuryLodges: Timeless Luxury, Un
    forgettable Adventures!</h1>
    <p>Explore our world of exceptional hospitality and discover your dream escape today.
Indulge in opulence, immerse in comfort, and create memories that last a lifetime. Experience our world-class hospitality and embark on a journey of discovery and relaxation. Book your extraordinary getaway with LuxuryLodges today and let us redefine your idea of luxury.</p>
  </div>
</div>
     
    </div>
  );
}

export default P;

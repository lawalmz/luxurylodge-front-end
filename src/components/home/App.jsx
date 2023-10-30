import React, { useState } from "react";
//import Axios from "axios";

import Nav from "./Nav";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";


function App(){
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return(
  <div className={`app ${darkMode ? "dark" : ""}`}>
  <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  <Section1 darkMode={darkMode} />
  <Section2 darkMode={darkMode}/>
  <Section3 darkMode={darkMode}/>


  </div>)
}

export default App
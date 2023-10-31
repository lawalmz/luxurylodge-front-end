//import Axios from "axios";
import React, { useState } from "react";
import Nav from "./Nav";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import data from "./data"
import input from "./note.js"
import Section4 from "./section4"; 



function App(){



  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };




  return(
  <div className={`app ${darkMode ? "dark" : ""}`}>
  <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  <Section1 darkMode={darkMode} />
  <Section2 darkMode={darkMode} cardsData={data}  heading={input[0].headning} caption={input[0].caption}/>
  <Section3 darkMode={darkMode}/>
  <Section2 darkMode={darkMode} cardsData={data}  heading={input[1].headning} caption={input[1].caption}/>
  <Section4 darkMode={darkMode} />


  </div>)
}

export default App
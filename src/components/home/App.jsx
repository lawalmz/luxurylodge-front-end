import React, { useState } from "react";
//import Axios from "axios";
import Hero from "./Hero";
import Nav from "./Nav";
import Part from "./Part";
import P from "./P2"


function App(){
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return(
  <div className={`app ${darkMode ? "dark" : ""}`}>
  <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  <Hero darkMode={darkMode} />
  <Part darkMode={darkMode}/>
  <P darkMode={darkMode}/>


  </div>)
}

export default App
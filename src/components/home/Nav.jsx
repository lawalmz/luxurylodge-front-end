import React, { useState } from "react";

function Nav({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
      {/* ToggleSwitch */}
      <div className="toggle-container">
        <input
          type="checkbox"
          id="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          style={{ display: "none" }} 
        />
        <label htmlFor="checkbox" className="switch">
          <span className={`slider ${darkMode ? "checked" : ""}`} />
        </label>
      </div>
      {/* End ToggleSwitch */}
      <div  className={`img-logo ${darkMode ? "dark" : ""}`} ></div>
      <div className={`menu-icon ${darkMode ? "dark" : ""}`} onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;

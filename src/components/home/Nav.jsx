// Nav.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

function Nav({ darkMode, toggleDarkMode, toggleMenu, isMenuOpen }) {
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${darkMode ? 'dark' : ''}`}>
      {/* ToggleSwitch */}
      <div className="user-toggle-container">
        <FontAwesomeIcon icon={faUser} className="font user-icon" />
       
        <div className="toggle-container">
          <input
            type="checkbox"
            id="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            style={{ display: 'none' }}
          />
          <label htmlFor="checkbox" className="switch">
            <span className={`slider ${darkMode ? 'checked' : ''}`} />
          </label>
        </div>
      </div>
      {/* End ToggleSwitch */}
      <div className={`img-logo ${darkMode ? 'dark' : ''}`} />
      <div className={`menu-icon ${darkMode ? 'dark' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''} ${darkMode ? 'dark' : ''}`}>
        <li>
          <Link to="/" className= {`nav-link ${darkMode ? 'dark' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${darkMode ? 'dark' : ''}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className={`nav-link ${darkMode ? 'dark' : ''}`}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${darkMode ? 'dark' : ''}`}>
            Contact
          </Link>
        </li>
        <li className="nav-icon"> {/* Add a class to the li element */}
          <Link to="/cart" className={`nav-link ${darkMode ? 'dark' : ''}`}>
            <FontAwesomeIcon icon={faCartShopping} className="font" /> <br/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  isMenuOpen: state.isMenuOpen, // Assuming you have isMenuOpen in your Redux state
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch({ type: 'TOGGLE_DARK_MODE' }),
  toggleMenu: () => dispatch({ type: 'TOGGLE_MENU' }), // Add this action if you have isMenuOpen in your Redux state
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

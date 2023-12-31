// Nav.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

function Nav({ darkMode, toggleDarkMode, toggleMenu, isMenuOpen, closeMenu }) {
  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

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
          {/* <Link to="/" className={`nav-link ${darkMode ? 'dark' : ''}`} onClick={handleLinkClick}>
            Home
          </Link> */}
          <a href="/">Home</a> 
        </li>
        <li>
          <Link to="/about" className={`nav-link ${darkMode ? 'dark' : ''}`} onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className={`nav-link ${darkMode ? 'dark' : ''}`} onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${darkMode ? 'dark' : ''}`} onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
       
      </ul>
      
    </nav>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch({ type: 'TOGGLE_DARK_MODE' }),
  toggleMenu: () => dispatch({ type: 'TOGGLE_MENU' }),
  closeMenu: () => dispatch({ type: 'CLOSE_MENU' }), // Add this action to close the menu
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

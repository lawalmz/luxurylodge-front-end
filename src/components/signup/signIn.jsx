import React, { useState } from 'react';
import { connect } from 'react-redux';
import Nav from '../home/Nav';
import Footer from '../home/footer';

const SignPage = ({ darkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic or API calls here
  };

  return (
    <div>
      <Nav/>
      <br/>
      <br/>
    <div className={`section ${darkMode ? "dark" : ""}`}>
      <div className={`s ${darkMode ? "dark" : ""}`}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
          <p className="sign-in-link">Don't 
          Have an account? <a href="/rg">Sign up</a>
        </p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(SignPage);

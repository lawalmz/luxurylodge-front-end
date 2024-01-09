import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import countryList from 'country-list';
import Nav from '../home/Nav';
import Footer from '../home/footer';
import { connect } from 'react-redux';

const RegisterPage = ({ darkMode}) => {
    const [profilePic, setProfilePic] = useState(null);
    const [imageStyle, setImageStyle] = useState({});
    const [nationalities, setNationalities] = useState([]);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePic(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    useEffect(() => {
        // Get the list of countries from the "country-list" package
        setNationalities(countryList.getNames());
      }, []);
  
    const handleImageStyleChange = (e) => {
      const { name, value } = e.target;
      setImageStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
    };
  
    return (
      <div>
      <Nav/>
      <br/>
      <br/>
      <div className={`section ${darkMode ? "dark" : ""}`}>
      
        <div className={`s ${darkMode ? "dark" : ""}`}>
          <h2>New User?</h2>
          <p style={{ fontSize: '20px' }}>Use this form to create your account</p>
          <label
            htmlFor="imageInput"
            className="profile-pic"
            style={{
              backgroundImage: `url(${profilePic})`,
              position: 'relative',
              ...imageStyle,
              backgroundSize: 'cover', // You can adjust this property
            }}
          >
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            {!profilePic && (
              <>
                <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '70px', color: 'white', alignItems: 'center' }} />
                </div>
                <div style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)' }}>
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px', color: 'white' }} />
                </div>
              </>
            )}
          </label>

        <div className="form-group">
          <label htmlFor="fullName" className="label">
            Full Name:
          </label>
          <input type="text" id="fullName" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">E-mail:</label>
          <input type="email" id="email" className="input-field"  />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="label">Username:</label>
          <input type="text" id="username" className="input-field" />
        </div>

       

        <div className="form-group">
          <label className="label">Gender:</label>
          <div className="gender-group">
            <input type="radio" id="male" name="gender" value="Male" className="custom-radio" />
            <label htmlFor="male" className="custom-radio-label">
              Male
            </label>

            <input type="radio" id="female" name="gender" value="Female" className="custom-radio" />
            <label htmlFor="female" className="custom-radio-label">
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="nationality" className="label">Nationality:</label>
          <select id="nationality" className="label sel" > 
            {nationalities.map((countryName) => (
              <option key={countryName} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="label">Password (8 or more characters):</label>
          <input type="password" id="password" className="input-field"  />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
          <input type="password" id="confirmPassword"  className="input-field" />
        </div>

        <button className="submit-btn">create</button>
        <p className="sign-in-link">
          Have an account? <a href="/sn">Sign in</a>
        </p>

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


export default connect(mapStateToProps)(RegisterPage);
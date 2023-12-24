import React, { useState } from 'react';
import { connect } from 'react-redux';

const Fm = ({ darkMode, onFormSubmit, fetchHotels }) => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      // Save the form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
  
      // Submit the form and fetch hotels
      await onFormSubmit(formData);
      setFormData({
        location: '',
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
        rooms: 1,
      });
      await fetchHotels();
  
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  

  return (
    <form className={`search-form ${darkMode ? 'dark' : ''}`}>
      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Location:
        <input
          className='location'
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
        />
      </label>

      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Check-in:
        <input
          className='check-in'
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          placeholder="Select check-in date"
        />
      </label>

      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Check-out:
        <input
          className='check-out'
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          placeholder="Select check-out date"
        />
      </label>

      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Guests:
        <select
          name="adults"
          value={formData.adults}
          onChange={handleChange}
          className="select-box"
        >
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1} Adult
            </option>
          ))}
        </select>
      </label>

      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Children:
        <select
          name="children"
          value={formData.children}
          onChange={handleChange}
          className="select-box2"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <option key={index} value={index}>
              {index} Child
            </option>
          ))}
        </select>
      </label>

      <label className={`form-element ${darkMode ? 'dark-label' : ''}`}>
        Rooms:
        <input
          className="room"
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          placeholder="Enter number of rooms"
        />
      </label>

      <button type="button" onClick={handleSearch} className="search-button">
        Search
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(Fm);

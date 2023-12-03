// SearchForm.jsx
import React, { useState } from 'react';


const SearchForm = () => {
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

  const handleSearch = () => {
    console.log('Search:', formData);
  };

  return (
    <form className="search-form">
      <label className="form-element">
        Location:
        <input className='location'
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
        />
      </label>

      <label className="form-element">
        Check-in:
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          placeholder="Select check-in date"
        />
      </label>

      <label className="form-element">
        Check-out:
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          placeholder="Select check-out date"
        />
      </label>

      <label className="form-element">
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

      <label className="form-element">
        Children:
        <select
          name="children"
          value={formData.children}
          onChange={handleChange}
          className="select-box"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <option key={index} value={index}>
              {index} Child
            </option>
          ))}
        </select>
      </label>

      <label className="form-element">
        Rooms:
        <input
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

export default SearchForm;

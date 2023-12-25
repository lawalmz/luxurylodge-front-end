import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Nav from '../home/Nav';
import Footer from '../home/footer';
import HotelsCard from './h_card';
import Fm from './fm';

function Hotels({ darkMode }) {
  const [hotels, setHotels] = useState(() => {
 
    const storedHotels = localStorage.getItem('hotels');
    return storedHotels ? JSON.parse(storedHotels) : [];
  });

  useEffect(() => {
  
    localStorage.setItem('hotels', JSON.stringify(hotels));
  }, [hotels]);

  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:3001/hotels');
      const data = await response.json();
      setHotels(data.hotels);
    } catch (error) {
      console.error('Error fetching hotel data:', error.message);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/hotels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setHotels(result.hotels);
      } else {
        console.error('Failed to modify data:', response.statusText);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div>
      <Nav />
      <br />
      <br />
      <div className={`section ${darkMode ? "dark" : ""}`}>
        <h1>Explore</h1>
        <p>Explore a world of possibilities as you navigate through our user-friendly
          platform, designed to elevate your booking experience. Immerse yourself in a
          collection of exquisite accommodations, discover exclusive deals, and tailor
          your stay to perfection. From luxurious suites to cozy retreats, our system opens
          the door to a spectrum of choices, ensuring your journey is as unique as your
          destination. With intuitive features, real-time availability, and a commitment
          to exceptional service, embark on a stress-free journey of reserving the perfect
          stay. Your ideal hotel experience begins here, where every click brings you closer
          to a memorable adventure
        </p>
        <hr />
        <br/>
        <br/>

        <Fm onFormSubmit={handleFormSubmit} />
        <p className="h_p"> Hotels Available </p>
        <div style={{ margin: '10px 0' }}>
          {hotels.map((hotel, index) => (
            <div key={index} style={{ marginBottom: '30px' }}>
              <HotelsCard
                title={hotel.name}
                description={hotel.address}
                backgroundImage={hotel.image}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(Hotels);

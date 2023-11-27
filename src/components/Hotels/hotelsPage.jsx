
import React from "react";
import { connect } from 'react-redux';
import Nav from "../home/Nav";
import Footer from "../home/footer"

function Hotels({ darkMode }) {
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
          to a memorable adventure.</p>
        <hr />
        <div className={`p_container ${darkMode ? "dark" : ""}`} >
          <p className="h_p">100 Hotels Available</p>
          <div className="f_name">
          <p className="filter-text">Filter</p>
          <div className={`filter-icon ${darkMode ? "dark" : ""}`}>
            <hr></hr>
            <hr></hr>
            <hr></hr>
          </div>
          </div>
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
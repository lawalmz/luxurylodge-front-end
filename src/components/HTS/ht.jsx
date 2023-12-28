import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Nav from '../home/Nav';
import Footer from '../home/footer';
import PhotoGrid from './photo_gride';
import RoomTable from './Room_table'; 

function ht({ darkMode }){
  

    const rooms = [
        { roomType: 'Deluxe Room', availableRooms: [101, 102, 103], guests: 2, pricePerNight: '$150', description:[" 1 extra-large double bed", "Air conditioning Flat-screen TV Free WiFi "] },
        { roomType: 'Suite', availableRooms: [201, 202, 203], guests: 4, pricePerNight: '$250', description:["Single person room that has a single of each thing"] },
        { roomType: 'Family Room', availableRooms: [301, 302, 303], guests: 6, pricePerNight: '$350',description:["1 extra-large double bed Bath", "Air conditioning Private", "bathroom Flat-screen TV Free WiFi", "Free toiletries Shower", "Safety deposit box", "Toilet Towels Desk Slippers", "Heating Fan Outdoor dining area Wardrobe or closet", "Dining area Dining table Clothes rack Toilet paper"] },
        // Add more rooms as needed
      ];
      


    const images = [
      
       {image: 'https://i.pinimg.com/564x/ef/c6/62/efc662ad7d783e588fcf5f8a2f28693f.jpg'},
       {image:  'https://i.pinimg.com/564x/1a/55/ad/1a55ad12640a86cea9277c19cbc8b37f.jpg'},
       {image:  'https://i.pinimg.com/564x/6b/61/9b/6b619b18f89bcdceec7e223c28e99f8e.jpg'},
       {image:  'https://i.pinimg.com/564x/f9/53/67/f95367c4ab318843d77c79a7216b9701.jpg'},
       {image:  'https://i.pinimg.com/564x/32/10/df/3210dfc221d2d41195519e8457d0fdc2.jpg'},
       {image:  'https://i.pinimg.com/564x/3a/aa/b8/3aaab8e5a4ab9dc9e665ce5640b4d4c1.jpg'},
       {image:  'https://i.pinimg.com/564x/6e/97/8f/6e978fabb958c5c4fa891f2b82c53f49.jpg'},
       {image:  'https://i.pinimg.com/564x/22/92/35/22923576c6e59e2f24efde65e99a2804.jpg'},
       {image:  'https://i.pinimg.com/564x/d5/73/9a/d5739a4bdfdae6e737475ecc43563607.jpg'},
       {image:  'https://i.pinimg.com/564x/6b/61/9b/6b619b18f89bcdceec7e223c28e99f8e.jpg'},
       {image: 'https://i.pinimg.com/564x/f9/53/67/f95367c4ab318843d77c79a7216b9701.jpg'},
       {image:  'https://i.pinimg.com/564x/32/10/df/3210dfc221d2d41195519e8457d0fdc2.jpg'},
       {image:  'https://i.pinimg.com/564x/3a/aa/b8/3aaab8e5a4ab9dc9e665ce5640b4d4c1.jpg'},
        
      ];

      


    return(
        <div >
            <Nav/>
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
            <hr/>
            <br/>

            <h1>hotel name</h1>
                
           
           
            <PhotoGrid hotels={images}/>
            <br/>

            {/* here i wanna create a table that says Room type,Number of guests,Price per nights,Select rooms */}
            <RoomTable rooms={rooms} />
            <Footer/>
            </div>
        </div>
    );


}


const mapStateToProps = (state) => ({
    darkMode: state.darkMode,
  });
  
  export default connect(mapStateToProps)(ht);
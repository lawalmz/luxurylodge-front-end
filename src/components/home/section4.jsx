import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section4 = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      message: 'I was amazed by the outstanding service and attention to detail provided by [Your Company Name]. They made my experience truly unforgettable!',
      avatar: 'https://media.licdn.com/dms/image/C5603AQGn5N2PXtlYcA/profile-displayphoto-shrink_800_800/0/1603402893726?e=2147483647&v=beta&t=AI9dMc-LvU6hG2eiE4rkiw7ZyOI3c98EGhQI4rRADpo', // Replace 'url_to_avatar_image_1' with actual image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'The team at [Your Company Name] went above and beyond to meet my needs. Their dedication is truly commendable.',
      avatar: 'https://media.licdn.com/dms/image/C5603AQGn5N2PXtlYcA/profile-displayphoto-shrink_800_800/0/1603402893726?e=2147483647&v=beta&t=AI9dMc-LvU6hG2eiE4rkiw7ZyOI3c98EGhQI4rRADpo', // Replace 'url_to_avatar_image_2' with actual image URL
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`section ${darkMode ? "dark" : ""}`}>
     <h1>Testimonials</h1>
     <p>Discover how our exceptional service and attention to detail at [Your Company Name] have made a lasting impact on our valued customers. Read through their experiences and testimonials, as we strive to offer outstanding services that create memorable and extraordinary moments for every individual.</p>
    <div className={`testimonials ${darkMode ? "dark" : ""}`}>
     
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.avatar} alt={testimonial.name} />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    
  );
};

export default Section4;

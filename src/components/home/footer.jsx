import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube, faWhatsapp }  from '@fortawesome/free-brands-svg-icons';
import { faMobile, faMobileButton, faX } from "@fortawesome/free-solid-svg-icons";

function Footer({ darkMode }) {
    const imageUrl = darkMode
    ? "../../images/dark_logo.jpg" // Image URL for dark mode
    : "../../images/logo2.jpg"; // Image URL for normal mode

    const iconColor = darkMode ? '#ffffff' : '#000000';

    const d = new Date();

    return (
        <div className={`section ${darkMode ? "dark" : ""}`}>
            <hr className={`line ${darkMode ? "dark" : ""}`}/>
          
            <div className="ft">
                <div className="footer-img-container">
                    <img
                        src={imageUrl}
                        alt="Luxury Lodge"
                        className="footer-img"
                    />
                </div>
                <div className={`links ${darkMode ? "dark" : ""}`}>
                    <h2>Quick links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="ft-app">
               
                    <h2>Download the app</h2>
                    <p>Find, book and explore our upgraded rooms in moments - even when you're on the go.
                        Get the best value prices at your fingertips. Free for iOS and Android.</p>
                      
                        
                      <FontAwesomeIcon icon={faMobileButton}  className="phone-image" style={{ fontSize: '100px', color: iconColor }}/>

                     
                </div>
                
            </div>
      
       
            
            <div className="social-icons" style={{ fontSize: '30px', color: iconColor, marginLeft: '10px' }}>
                <FontAwesomeIcon icon={faInstagram} className="font" />
                <FontAwesomeIcon icon={faX} className="font"  />
                <FontAwesomeIcon icon={faFacebook} className="font" />
                <FontAwesomeIcon icon={faYoutube} className="font" />
                <FontAwesomeIcon icon={faWhatsapp} className="font"  />
            </div>
            <hr className={`line2 ${darkMode ? "dark" : ""}`}/>

            <div className="c_pay">
                <img src="/images/mastercard.svg" alt="MasterCard_image" className="card_payment" />
                <img src="/images/amex.svg" alt="MasterCard_image" className="card_payment" />
                <img src="/images/apple.svg" alt="MasterCard_image" className="card_payment" />
                <img src="/images/paypal.svg" alt="MasterCard_image" className="card_payment" />
                <img src="/images/visa.svg" alt="MasterCard_image" className="card_payment" />
            </div>
            <p>&copy; {d.getFullYear()} Luxury Lodges. All rights reserved.</p>

        </div>
    );
}

export default Footer;

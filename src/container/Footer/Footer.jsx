import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, Alexandria, Al 90021, Egypt</p> <br />
        <p className='p__opensans'>+21 0987654321</p>
        <p className='p__opensans'>+21 0123456789</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} className='spoon__img' alt='spoon' style={{marginTop: 15}} />
          <div className='app__footer-icons'>
            <i className='ri ri-youtube-fill'></i>
            <i className='ri ri-instagram-fill'></i>
            <i className='ri ri-twitter-fill'></i>
          </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p> <br />
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>07:00 am - 11:00 am</p>
      </div>
    </div>
    <div className='app__footer_copyright'>
      <p className='p__opensans'>© 2021 Bellyteam. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;

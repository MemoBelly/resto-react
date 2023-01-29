import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase The New Flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p style={{margin: '2rem 0'}} className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ut? Culpa nisi veritatis praesentium explicabo iure cum eos, esse quod dolores qui, vero voluptates aliquam libero modi quisquam ex. Eos.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div> 
);

export default Header;

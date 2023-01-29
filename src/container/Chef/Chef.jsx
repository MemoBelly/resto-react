import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Chef’s Word' />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit quibusdam</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam hic voluptates eaque, perferendis veritatis accusantium asperiores magni debitis ab possimus at architecto laudantium facere, dolorum ut sunt odit quaerat!</p>
      </div>

      <div className='app__chef-sign'>
        <p className='p__cormorant'>Kevin Luo</p>
        <p className='p__opensans'>chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;

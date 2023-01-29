import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: 'aaa', marginTop: '2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis non illum unde expedita, molestias iste quisquam consequuntur</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card'>
              <img src={image} alt='gallery' />
              <i className='ri ri-instagram-line gallery_icon'></i>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <i className='ri ri-arrow-left-line gallery__arrow-icon' onClick={() => scroll('left')}></i>
          <i className='ri ri-arrow-right-line gallery__arrow-icon' onClick={() => scroll('right')}></i>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

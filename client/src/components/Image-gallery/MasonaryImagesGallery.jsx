import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';

const MasonaryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {galleryImages.map((item, index) => (
          <img
            className='masonary__img'
            src={item}
            alt='gallery'
            key={index}
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonaryImagesGallery;

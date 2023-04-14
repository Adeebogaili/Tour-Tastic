import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
        <p>
          Tour-Tastic provided a seamless, enjoyable and memorable experience.
          Knowledgeable guides, well-planned itinerary, comfortable
          accommodations, delicious food, and attention to detail make it highly
          recommended for a remarkable tour.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt='avatar1' className='w-25 h-25 rounded-2' />
        </div>
        <h6 className='mb-0 mt-3'>Robert Peston</h6>
        <p>Customer</p>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
          Tour-Tastic provided me with an unforgettable tour experience. The
          friendly guides, and delicious food exceeded my expectations. The
          attention to detail and flexibility were also commendable. Highly
          recommended for a remarkable tour.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='avatar1' className='w-25 h-25 rounded-2' />
        </div>
        <h6 className='mb-0 mt-3'>Agnes Martin </h6>
        <p>Customer</p>
      </div>
      <div className='testimonial py-4 px-3'>
        <p>
          I had an amazing experience with Tour-Tastic. The knowledgeable and
          friendly guides, well-planned itinerary, and delicious food made it an
          unforgettable trip. Highly recommended for anyone looking for a great
          tour experience.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} alt='avatar1' className='w-25 h-25 rounded-2' />
        </div>
        <h6 className='mb-0 mt-3'>Clint Hermes</h6>
        <p>Customer</p>
      </div>
    </Slider>
  );
};

export default Testimonials;

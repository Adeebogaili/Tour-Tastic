import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';

// Media
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

// components
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/Image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Do more with Tour-Tastic'} />
                  <img src={worldImg} alt='world' />
                </div>
                <h1>
                Traveling is a gateway to crafting unforgettable{' '}
                  <span className='highlight'> memories.</span>
                </h1>
                <p>
                  Have a dream destination in mind? Whether you want to follow
                  your appetite to Tuscany or go wild in America's greatest
                  national parks, our guided tour packages will get you there.
                </p>
              </div>
            </Col>
            <Col lg=''>
              <div className='hero__img-box'>
                <img src='https://images.pexels.com/photos/2072583/pexels-photo-2072583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box hero__video-box mt-4'>
                <video src={heroVideo} alt='hero' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src='https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>Why book with Tour-Tastic?</h5>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* feature tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* feature tour section end */}
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />
                
                <p>
                  Welcome to Tour-Tastic, where we are dedicated to
                  providing you with an unforgettable travel experience. Our
                  team of knowledgeable and experienced tour guides will take
                  you on a journey through some of the world's most beautiful
                  and fascinating destinations.
                </p>
              </div>

              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successfull Trips</h6>
                </div>
                <div className='counter__box'>
                  <span>3k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src='https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}
      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonaryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}
      {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Testimonials'} />
              <h2 className='testimonial__title'>See why people love our service</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}
      <NewsLetter />
    </>
  );
};

export default Home;

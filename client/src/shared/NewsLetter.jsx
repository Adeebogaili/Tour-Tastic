import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='newsletter__content'>
              <h2>Subscribe now to get useful travel information.</h2>

              <div className='newsletter__input'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn newsletter__btn'>Subscribe</button>
              </div>

              <p>
              Get exclusive discounts and deals on travel! Not only will you get useful travel information, but you'll also be the first to know about special offers that will save you money on your next trip. Don't miss out on these amazing deals, sign up today!
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;

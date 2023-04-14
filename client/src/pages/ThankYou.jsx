import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
            <div className='thank__you'>
              <span>
                <i className='ri-checkbox-circle-line'></i>
              </span>
              <h1 className='mb-3 fw-semibold'>
                Thank you for booking your tour with us!
              </h1>
              <h3 className='mb-4'>
                {' '}
                We look forward to providing you with an unforgettable
                experience. If you have any questions or concerns leading up to
                your tour, please don't hesitate to reach out to us. We
                appreciate your business and hope you have a wonderful time on
                your upcoming tour!
              </h3>
              <Button className='btn primary__btn w-25'>
                <Link to='/home'>Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;

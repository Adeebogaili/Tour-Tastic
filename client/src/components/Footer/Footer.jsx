import React from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const todos = [1, 2, 3]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <Link to='/home'>
                <img src={logo} alt='logo' onClick={scrollToTop} />
              </Link>
              <p>
              New price? New plan? No problem. We're here to help, 24/7
              </p>
              <div className='social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'>
                    <i className='ri-youtube-line'></i>
                  </Link>
                  <Link to='#'>
                    <i className='ri-github-fill'></i>
                  </Link>
                  <Link to='#'>
                    <i className='ri-facebook-circle-line'></i>
                  </Link>
                  <Link to='#'>
                    <i className='ri-instagram-line'></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className='footer__quick-links'>
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' onClick={scrollToTop}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0' onClick={scrollToTop}>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-3'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Baghdad, Iraq</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-3'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>adeebnasser@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-3'>
                  <span>
                    <i className='ri-phone-fill'></i>
                  </span>
                  Phone: 123-312-3232
                </h6>
                <p className='mb-0'>Baghdad, Iraq</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>
              Copyright {year}, designed and developed by Adeeb Ogaili. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

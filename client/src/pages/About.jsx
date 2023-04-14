import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

const About = () => {
  return (
    <div className='about'>
      <Container className='about__container mt-5'>
        <Row>
          <h5>Do More With Tour-Tastic</h5>

          <p>Hello, we're Tour-Tastic.</p>
          <p>
            As the leading marketplace for travel experiences, we believe that
            making memories is what travel is all about. And with 300,000+
            experiences to explore—everything from simple tours to extreme
            adventures (and all the niche, interesting stuff in between)—making
            memories that will last a lifetime has never been easier.
          </p>
          <p>
            With industry-leading flexibility and last-minute availability, it's
            never too late to make any day extraordinary.
          </p>

          <p>One site, 300,000+ experiences you'll remember.</p>

          <h5>Why choose Tour-Tastic?</h5>
          <ul>
            <li>
              <span>Exceptional flexibility:</span> You're in control, with free
              cancellation and payment options to satisfy any plan or budget.
            </li>
            <li>
              <span>Quality you can trust:</span> Our experiences meet high
              quality standards and are backed by millions of reviews, so you
              know you're getting the best.
            </li>
            <li>
              <span>Experiences to remember:</span> Browse and book tours and
              activities so incredible, you'll want to tell your friends.
            </li>
            <li>
              <span>Award-winning support:</span> Find a lower price? Have a
              change in plans? No problem. We're here to help, 24/7.
            </li>
          </ul>

          <h5>Are you a tour operator?</h5>

          <p>
            Tour-Tastic makes it easy for you to grow your business and reach
            customers worldwide. Use our intuitive Tour-Tastic Management Center to
            spend less time managing your business and more time creating
            memorable moments. Plus, you'll get access to market-specific
            insights and tailored coaching to help your products stand out from
            the rest.
          </p>

          <p>
            Join us today and start selling your tours, activities and
            attractions tickets to millions of travelers worldwide.
          </p>

          <Link>Get started</Link>

          <h5>Are you a travel agent?</h5>

          <p>
            Sign up now and earn commission on all tours and activities you book
            or recommend on our Travel Agent booking site. You'll get paid
            monthly and enjoy robust reporting to help you manage your bookings
            and earnings.
          </p>

          <Link>Get started</Link>

          <h5>We're going places. Join us.</h5>

          <p>
            We're the brand behind millions of travel experiences and lifelong
            memories-and we have fun while we're at it.
          </p>

          <p>Come help us change the world, one experience at a time.</p>

          <Link>Browse jobs</Link>

          <h5>Contact us</h5>
          <p>Address: 400 9st Avenue, Mars, MA 02494</p>
          <p>Phone number: +1 (888) 898-9000</p>
          <p>Email: CSEU@Tour-tastic.com</p>
        </Row>
      </Container>
    </div>
  );
};

export default About;

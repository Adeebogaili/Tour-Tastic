import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from './../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/NewsLetter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from './../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef();

  const [tourRating, setTourRating] = useState(null);

  const handleClick = (rating) => {
    const newTourRating = {
      rating,
      color: '#ff7e01',
    };
    setTourRating(newTourRating);
  };

  const { user } = useContext(AuthContext);

  // fetch data from database
  const { data: tour, loading, error, setData } = useFetch(`${BASE_URL}/tours/${id}`);

  // destructure properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // submit request to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  
    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in');
      }
  
      const reviewObj = {
        username: user?.username,
        userId: user?._id,
        reviewText,
        rating: tourRating.rating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        return alert(result.message);
      }
  
      setData((prevData) => ({
        ...prevData,
        reviews: [...prevData.reviews, result.data],
      }));
  
      reviewMsgRef.current.value = '';
      
      setTourRating(null);
  
    } catch (err) {
      alert(err.message);
    }
  };
  
// delete a review
  const handleDelete = async (reviewId) => {
    try {
      const res = await fetch(`${BASE_URL}/review/${id}/${reviewId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        return alert(result.message);
      }
  
      // Remove the deleted review ID from the Tour model's reviews array
      await fetch(`${BASE_URL}/tour/${id}/reviews/${reviewId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
    
      // Update the data after deleting the review
      setData(prevData => {
        const updatedReviews = prevData.reviews.filter(review => review._id !== reviewId);
        return {
          ...prevData,
          reviews: updatedReviews
        };
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg='8'>
                <div className='tour__content'>
                  <img src={photo} alt={title} />
                  <div className='tour__info'>
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour__rating d-flex align-items-center justify-content-between gap-1'>
                        <i
                          className='ri-star-fill'
                          style={{ color: 'var(--secondary-color' }}
                        ></i>{' '}
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          'Not rated'
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i className='ri-map-pin-user-fill'></i> {address}
                      </span>
                    </div>
                    <div className='tour__extra-details'>
                      <span>
                        <i className='ri-map-pin-2-line'></i> {city}
                      </span>
                      <span>
                        <i className='ri-money-dollar-circle-line'></i> ${price}
                        /person
                      </span>
                      <span>
                        <i className='ri-map-pin-time-line'></i> {distance} k/m
                      </span>
                      <span>
                        <i className='ri-group-line'></i> {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* tour reviews section start*/}
                  <div className='tour__reviews mt-4'>
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={handleSubmit}>
                      <div className='rating__group d-flex align-items-center gap-3'>
                        <span onClick={() => handleClick(1)}>
                          1{' '}
                          <i
                            className='ri-star-s-fill'
                            style={
                              tourRating && tourRating.rating >= 1
                                ? { color: tourRating.color }
                                : {}
                            }
                          ></i>
                        </span>
                        <span onClick={() => handleClick(2)}>
                          2{' '}
                          <i
                            className='ri-star-s-fill'
                            style={
                              tourRating && tourRating.rating >= 2
                                ? { color: tourRating.color }
                                : {}
                            }
                          ></i>
                        </span>
                        <span onClick={() => handleClick(3)}>
                          3{' '}
                          <i
                            className='ri-star-s-fill'
                            style={
                              tourRating && tourRating.rating >= 3
                                ? { color: tourRating.color }
                                : {}
                            }
                          ></i>
                        </span>
                        <span onClick={() => handleClick(4)}>
                          4{' '}
                          <i
                            className='ri-star-s-fill'
                            style={
                              tourRating && tourRating.rating >= 4
                                ? { color: tourRating.color }
                                : {}
                            }
                          ></i>
                        </span>
                        <span onClick={() => handleClick(5)}>
                          5{' '}
                          <i
                            className='ri-star-s-fill'
                            style={
                              tourRating && tourRating.rating >= 5
                                ? { color: tourRating.color }
                                : {}
                            }
                          ></i>
                        </span>
                      </div>

                      <div className='review__input'>
                        <input
                          type='text'
                          ref={reviewMsgRef}
                          placeholder='share your thoughts'
                          required
                        />
                        <button
                          className='btn primary__btn text-white'
                          type='submit'
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className='user__reviews'>
                      {reviews?.map((review, index) => (
                        <div className='review__item' key={index}>
                          <img src={avatar} alt='' />

                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString('en-US', options)}
                                </p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating}
                                <i className='ri-star-s-fill'></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                          <Button onClick={() => handleDelete(review._id)}>Delete</Button>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* tour reviews section end*/}
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;

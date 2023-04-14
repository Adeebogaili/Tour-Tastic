import React, { useState, useEffect, useContext } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/tour.css';
import { AuthContext } from './../context/AuthContext';

// shared components
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import TourForm from '../components/Tour-form/TourForm';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const { user } = useContext(AuthContext);
  const role = user?.role;

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
    setError,
    setData,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  // Add tour
  const addTour = async (tourData) => {
    try {
      const res = await fetch(`${BASE_URL}/tours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(tourData),
      });

      if (!res.ok) {
        const result = await res.json();
        setError(result.message);
      } else {
        const newTour = await res.json();
        setData((prevData) => [...prevData, newTour]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a tour
  const handleDelete = async (tourId) => {
    try {
      const res = await fetch(`${BASE_URL}/tours/${tourId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) {
        const result = await res.json();
        setError(result.message);
      } else {
        setData((prevData) => {
          const deletedTour = prevData.filter((tour) => tour._id !== tourId);
          return [...deletedTour];
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            {role === 'admin' && <TourForm addTour={addTour} />}
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>${error}</h4>}
          <Row>
            {tours?.map((tour) => (
              <Col
                lg='3'
                md='6'
                sm='6'
                className='mb-4'
                key={`tour-${tour._id}`}
              >
                <TourCard
                  tour={tour}
                  handleDelete={() => handleDelete(tour._id)}
                />
              </Col>
            ))}
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;

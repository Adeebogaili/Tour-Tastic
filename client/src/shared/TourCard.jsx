import {useContext} from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import { AuthContext } from '../context/AuthContext';
import './tour-card.css';

const TourCard = ({ tour, handleDelete }) => {

  const { user } = useContext(AuthContext);
  const role = user?.role

  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <Link to={`/tours/${_id}`}>
            <img src={photo} alt='tour-img' />
          </Link>
          {featured && <span>Featured</span>}
          {role === 'admin' ? <button onClick={() => handleDelete(_id)}>Delete</button> : ''}
        </div>
        <CardBody>
          <div className='card__top d-flex align-items-center justify-content-between'>
            <span className='tour__location d-flex align-items-center justify-content-between gap-1'>
              <i className='ri-map-pin-line'></i> {city}
            </span>
            <span className='tour__rating d-flex align-items-center justify-content-between gap-1'>
              <i className='ri-star-fill'></i>{' '}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                'Not rated'
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>
          <h5 className='tour__title'>
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>
              ${price} <span> /person</span>
            </h5>
            <button className='btn booking__btn'>
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;

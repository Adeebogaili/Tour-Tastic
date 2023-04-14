import React, { useState } from 'react';
import { Container, Row, Col, Form, ListGroup, Button } from 'reactstrap';

export default function TourForm({addTour}) {

  const initInputs = {
    title: '',
    city: '',
    address: '',
    distance: 0,
    price: 0,
    maxGroupSize: 0,
    desc: '',
    reviews: [],
    photo: '',
    featured: false
  }

  const [inputs, setInputs] = useState(initInputs)

  const {title, city, address, distance, price, maxGroupSize, desc, photo} = inputs

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addTour(inputs)
    setInputs(initInputs)
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <div className='tour__input'>
                  <input
                    type='text'
                    name="title"
                    value={title}
                    placeholder='Title'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    name="city"
                    value={city}
                    placeholder='City'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    name="address"
                    value={address}
                    placeholder='Address'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='number'
                    name="distance"
                    value={distance}
                    placeholder='Distance'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='number'
                    name="price"
                    value={price}
                    placeholder='Price'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='number'
                    name="maxGroupSize"
                    value={maxGroupSize}
                    placeholder='Group Size'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    name="desc"
                    value={desc}
                    placeholder='Description'
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    name="photo"
                    value={photo}
                    placeholder='Photo'
                    onChange={handleChange}
                    required
                  />
                  {/* <input type='checkbox' ref={featuredRef} required /> */}
                  <button className='btn primary__btn text-white' type='submit'>
                    Submit
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';

import { AuthContext } from '../context/AuthContext';

const Router = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      {!user && <Route path='/login' element={<Login />} />}
      {user && <Route path='/login' element={<Navigate to='/home' />} />}
      {!user && <Route path='register' element={<Register />} />}
      {user && <Route path='register' element={<Navigate to='/home' />} />}
      <Route path='thank-you' element={<ThankYou />} />
      <Route path='tours/search' element={<SearchResultList />} />
    </Routes>
  );
};

export default Router;

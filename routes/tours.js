import express from 'express';
import {
  createTour,
  deleteTour,
  getAllTours,
  getFeaturedTours,
  getOneTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// @route   POST api/tours
// @des     Create a tour
// @access  Private
router.post('/', verifyAdmin, createTour);

// @route   PUT api/tours/:tourId
// @des     Update a tour
// @access  Private
router.put('/:tourId', verifyAdmin, updateTour);

// @route   DELETE api/tours/:tourId
// @des     Delete a tour
// @access  Private
router.delete('/:tourId', verifyAdmin, deleteTour);

// @route   GET api/tours/:tourId
// @des     Get one tour by ID
// @access  Public
router.get('/:tourId', getOneTour);

// @route   GET api/tours
// @des     Get all tours
// @access  Public
router.get('/', getAllTours);

// @route   GET api/tours/search/getToursBySearch
// @des     Get Tours by city, distance, and group size
// @access  Public
router.get('/search/getToursBySearch', getTourBySearch);

// @route   GET api/tours//search/getFeaturedTours
// @des     Get featured tours
// @access  Public
router.get('/search/getFeaturedTours', getFeaturedTours);

// @route   GET api/tours//search/getTourCount
// @des     Get tour count
// @access  Public
router.get('/search/getTourCount', getTourCount);

export default router;

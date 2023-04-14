const express = require('express');
const { verifyAdmin, verifyUser } = require('../utils/verifyToken.js');
const {
  createBooking,
  getAllBookings,
  getBooking,
} = require('../controllers/bookingController.js');

const router = express.Router();

// @route   POST api/booking
// @des     Create booking
// @access  Private
router.post('/', verifyUser, createBooking);

// @route   GET api/booking/:bookingId
// @des     Get a single booking
// @access  Private
router.get('/:bookingId', verifyUser, getBooking);

// @route   POST api/booking/
// @des     Get all bookings
// @access  Private
router.get('/', verifyAdmin, getAllBookings);

module.exports = router;

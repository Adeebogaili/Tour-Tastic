const express = require('express');
const { createReview, deleteReview } = require('../controllers/reviewController.js');
const { verifyUser } = require('../utils/verifyToken.js');

const router = express.Router();

// @route   POST api/review/:tourId
// @des     Post a review
// @access  Private
router.post('/:tourId', verifyUser, createReview);

// @route   DELETE api/review/:tourId
// @des     Post a review
// @access  Private
router.delete('/:tourId/:reviewId', verifyUser, deleteReview);

module.exports = router;


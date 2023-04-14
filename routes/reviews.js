import express from 'express';
import { createReview, deleteReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// @route   POST api/review/:tourId
// @des     Post a review
// @access  Private
router.post('/:tourId', verifyUser, createReview);

// @route   DELETE api/review/:tourId
// @des     Post a review
// @access  Private
router.delete('/:tourId/:reviewId', verifyUser, deleteReview);

export default router;

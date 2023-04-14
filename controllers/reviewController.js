const Tour = require('../models/Tour.js');
const Review = require('../models/Review.js');

// post a review
exports.createReview = async (req, res, next) => {
  const tourId = req.params.tourId;

  // set the userId field to the id of the currently authenticated user
  req.body.userId = req.user.id;

  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // update the reviews array of the tour after creating a new review
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(201)
      .json({ success: true, message: 'Review submitted', data: savedReview });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// delete a review
exports.deleteReview = async (req, res, next) => {
  const { reviewId } = req.params;
  const userId = req.user.id;
  const { tourId } = req.params;

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: 'Review not found' });
    }

    if (review.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: 'You are not authorized to delete this review' });
    }

    await Review.findByIdAndRemove(reviewId).exec();

    // remove the deleted review from the tour's reviews array
    await Tour.findByIdAndUpdate(tourId, {
      $pull: { reviews: reviewId },
    });

    res.status(200).json({
      success: true,
      message: 'Review deleted',
      data: review,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};





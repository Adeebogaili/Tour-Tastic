const Tour = require('../models/Tour.js');

// create a tour
exports.createTour = async (req, res, next) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: savedTour,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  update tour
exports.updateTour = async (req, res, next) => {
  const id = req.params.tourId;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: 'Successful',
      data: updateTour,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  delete tour
exports.deleteTour = async (req, res, next) => {
  const id = req.params.tourId;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `Successfully deleted ${deletedTour.title} tour`,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// get tour by ID
exports.getOneTour = async (req, res, next) => {
  const id = req.params.tourId;

  try {
    const tour = await Tour.findById(id)
      .sort({ createdAt: -1 })
      .populate({
        path: 'reviews',
        model: 'Review',
        options: {
          sort: { createdAt: -1 }
        }
      })

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tour,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  get all tours
exports.getAllTours = async (req, res, next) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find().sort({ createdAt: -1 })
    .populate({
      path: 'reviews',
      model: 'Review',
      options: {
        sort: { createdAt: -1 }
      }
    })
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: 'Successful',
      data: tours,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// get tour by search
exports.getTourBySearch = async (req, res, next) => {
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    })
    .sort({ createdAt: -1 })
      .populate({
        path: 'reviews',
        model: 'Review',
        options: {
          sort: { createdAt: -1 }
        }
      })

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tours,
    });
  } catch (error) {
    res.status(500);
    return next(err);
  }
};

//  get featured tours
exports.getFeaturedTours = async (req, res, next) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8).populate({
      path: 'reviews',
      model: 'Review',
    });

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tours,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// get tour counts
exports.getTourCount = async (req, res, next) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

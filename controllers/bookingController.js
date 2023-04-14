const Booking = require('../models/Booking.js');

// create new booking
exports.createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();

    res.status(201).json({
      success: true,
      message: 'Your tour is booked',
      data: savedBooking,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// get booking
exports.getBooking = async (req, res, next) => {
  const id = req.params.bookingId;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({ sucess: true, message: 'Successful', data: book });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// get all bookings
exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();

    res
      .status(200)
      .json({ sucess: true, message: 'Successful', data: bookings });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// routes
const tourRoute = require('./routes/tours.js');
const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const reviewRoute = require('./routes/reviews.js');
const bookingRoute = require('./routes/bookings.js');


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Connect to MongoDB database
const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      console.log(`MongoDB databse connected`)
    );
  } catch (error) {
    console.log('Failed to connect to MongoDB database');
  }
};

// define routes
app.use('/api/tours', tourRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/review', reviewRoute);
app.use('/api/booking', bookingRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});

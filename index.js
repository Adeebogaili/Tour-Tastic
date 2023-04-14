import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// routes
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

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

app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});

import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/restaurant");
    console.log('Connect to DB success');
  } catch (error) {
    console.log('Connect to DB fail: ', error.message);
  }
}

export default connectDB;

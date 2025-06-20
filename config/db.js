// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // ADD THIS LINE TO YOUR FILE:
    console.log('Attempting to connect to MongoDB with URI:', process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI,
    //  {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true,
    // }
    );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
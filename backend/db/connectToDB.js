import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('connected');
  } catch (error) {
    console.log('Error connectiong', error.message);
  }
};

export default connectToDB;

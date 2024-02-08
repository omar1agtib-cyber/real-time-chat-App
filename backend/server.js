import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import userRoutes from './routes/user.js'

import connectToDB from './db/connectToDB.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // read propreties from cookie
app.use('/api/auth/', authRoutes);
app.use('/api/message/', messageRoutes);
app.use('/api/users/', userRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`server running on port ${PORT}`);
});

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import initDatabase from './db/InitDatabase';
import AuthRouter from './routers/AuthRouter';
import QuestionsRouter from './routers/QuestionsRouter';
import TopicsRouter from './routers/TopicsRouter';
import UserRouter from './routers/UserRouter';

dotenv.config();
const PORT = process.env.EXPRESS_API_PORT || 5001;
const DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/cosmoquiz';

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());

app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
app.use('/api/topics', TopicsRouter);
app.use('/api/topics/:id', QuestionsRouter);

async function start() {
  await mongoose.connect(DB_URL);
  console.log('Database connected');

  await mongoose.connection.dropDatabase();
  console.log('Database dropped');

  await initDatabase();

  app.listen(PORT, () => {
    console.log(`Express API on ${PORT}`);
  });
}

start();
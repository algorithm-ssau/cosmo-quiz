import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import initDatabase from "./db/InitDatabase";
import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import AuthRouter from "./routers/AuthRouter";
import QuestionsRouter from "./routers/QuestionRouter";
import TopicsRouter from "./routers/TopicRouter";
import UserRouter from "./routers/UserRouter";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import GameRouter from "./routers/GameRouter";
import path from "path";

dotenv.config();
const PORT = process.env.EXPRESS_API_PORT || 5001;
const DB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/cosmoquiz";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());
app.use("/prizes", express.static(path.join(__dirname, "../prizes")));

app.use("/api/auth", AuthRouter);
app.use("/api/user", AuthMiddleware, UserRouter);
app.use("/api/topics", AuthMiddleware, TopicsRouter);
app.use("/api/questions", AuthMiddleware, QuestionsRouter);
app.use("/api/game", AuthMiddleware, GameRouter);

app.use(ErrorMiddleware);

async function start() {
  await mongoose.connect(DB_URL);
  console.log("Database connected");

  await mongoose.connection.dropDatabase();
  console.log("Database dropped");

  await initDatabase();

  app.listen(PORT, () => {
    console.log(`Express API on ${PORT}`);
  });
}

start();

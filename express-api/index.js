import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: process.env.CLIENT_SOCKET }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.json('Hello World!');
});

const PORT = process.env.EXPRESS_API_PORT;
app.listen(PORT, () => {
  console.log(`Express api port: ${PORT}`);
});

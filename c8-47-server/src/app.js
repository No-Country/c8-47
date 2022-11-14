import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

import { connectMongo } from './database/db.js';
import router from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('dev'));

app.use('/', connectMongo);

app.use('/', router);

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to c8-47 API');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || error;
  if (error.name === 'CastError')
    return res.status(status).json({ message: 'Invalid id' });
});

export { app };

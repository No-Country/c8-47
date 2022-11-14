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

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  return res.status(status).send(message);
});

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to c8-47 API');
});

export { app };

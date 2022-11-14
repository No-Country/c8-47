import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

import { connectMongo } from './database/db.js';
import router from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { handleErrors } from './middlewares/handleErrors.js';

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

app.use(notFound);

app.use(handleErrors);

export { app };

import { Router } from 'express';

import { verifyToken } from '../middlewares/verify.js';

import testRouter from './test.router.js';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';
import contactRouter from './contact.router.js';
import personalRouter from './personal.router.js';

const router = Router();

router.use('/test', testRouter);
router.use('/auth', authRouter);
router.use('/user', verifyToken, userRouter);
router.use('/contact', verifyToken, contactRouter);
router.use('/personal', verifyToken, personalRouter);

export default router;

import { Router } from 'express';

import { verifyToken } from '../middlewares/verify.js';

import testRouter from './test.router.js';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';

const router = Router();

router.use('/test', testRouter);
router.use('/auth', authRouter);
router.use('/user', verifyToken, userRouter);

export default router;

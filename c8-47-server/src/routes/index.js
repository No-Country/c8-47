import { Router } from 'express';

import { verifyToken } from '../middlewares/verifyAuth.js';

import testRouter from './test.router.js';
import authRouter from './auth.router.js';
import contactRouter from './contact.router.js';
import personalRouter from './personal.router.js';
import socialRouter from './social.router.js';
import educationRouter from './education.router.js';

const router = Router();

router.use('/test', testRouter);
router.use('/auth', authRouter);
router.use('/contact', verifyToken, contactRouter);
router.use('/personal', verifyToken, personalRouter);
router.use('/social', verifyToken, socialRouter);

router.use('/education', verifyToken, educationRouter);
// router.post('/course', addData);
// router.post('/job', addData);
// router.post('/task', addData);

// router.get('/curriculum', addData);
// router.post('/presentation', addData);
// router.post('/selector', addData);

// router.post('/section', addData);
// router.post('/skill', addData);
// router.post('/tag', addData);

// router.use('/admin', adminRouter)

export default router;

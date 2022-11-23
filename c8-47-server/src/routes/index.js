import { Router } from 'express';

import { verifyToken } from '../middlewares/verifyAuth.js';

import testRouter from './test.router.js';
import authRouter from './auth.router.js';
import contactRouter from './contact.router.js';
import personalRouter from './personal.router.js';
import educationRouter from './education.router.js';
import jobRouter from './job.router.js';

const router = Router();

router.use('/test', testRouter);
router.use('/auth', authRouter);

router.use('/contact', verifyToken, contactRouter);
router.use('/personal', verifyToken, personalRouter);

router.use('/education', verifyToken, educationRouter);
router.use('/job', verifyToken, jobRouter);

// router.use('/curriculum', curriculumRouter);
//! router.use('/presentation', presentationRouter);
// router.use('/selector', selectorRouter);

// router.use('/skill', skillRouter);
// router.use('/tag', tagRouter);

// router.use('/admin', adminRouter)

export default router;

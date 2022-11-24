import { Router } from 'express';

import { verifyToken } from '../middlewares/verifyAuth.js';

import testRouter from './test.router.js';
import authRouter from './auth.router.js';
import contactRouter from './contact.router.js';
import personalRouter from './personal.router.js';
import educationRouter from './education.router.js';
import languageRouter from './language.router.js';
import jobRouter from './job.router.js';
import curriculumRouter from './curriculum.router.js';
import selectorRouter from './selector.router.js';

const router = Router();

router.use('/auth', authRouter);

router.use('/contact', verifyToken, contactRouter);
router.use('/education', verifyToken, educationRouter);
router.use('/language', verifyToken, languageRouter);
router.use('/job', verifyToken, jobRouter);
router.use('/personal', verifyToken, personalRouter);

router.use('/curriculum', verifyToken, curriculumRouter);
//! router.use('/presentation', verifyToken, presentationRouter);
router.use('/selector', verifyToken, selectorRouter);

// router.use('/skill', verifyToken, skillRouter);
// router.use('/tag', verifyToken, tagRouter);

router.use('/test', testRouter);
// router.use('/admin', adminRouter)

export default router;

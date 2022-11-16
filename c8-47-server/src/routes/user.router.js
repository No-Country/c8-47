import { Router } from 'express';

import { verifyToken } from '../middlewares/verify.js';
import { addData, editContact } from '../controllers/user.ctrl.js';

const router = Router();

router.post('/contact', verifyToken, editContact);
// router.post('/course', addData);
// router.get('/curriculum', addData);
// router.post('/education', addData);
// router.post('/job', addData);
// router.post('/personal', addData);
// router.post('/presentation', addData);
// router.post('/section', addData);
// router.post('/selector', addData);
// router.post('/skill', addData);
// router.post('/social', addData);
// router.post('/tag', addData);
// router.post('/task', addData);

export default router;

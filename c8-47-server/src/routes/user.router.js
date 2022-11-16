import { Router } from 'express';

import { verifyToken } from '../middlewares/verify.js';
import { contactValidation } from '../middlewares/validations/user.js';
import { getContact, editContact } from '../controllers/user.ctrl.js';

const router = Router();

router.get('/contact', verifyToken, getContact);
router.post('/contact', [verifyToken, contactValidation], editContact);
// router.post('/social', addData);
// router.post('/personal', addData);

// router.get('/curriculum', addData);
// router.post('/presentation', addData);
// router.post('/selector', addData);

// router.post('/section', addData);
// router.post('/skill', addData);
// router.post('/tag', addData);

// router.post('/course', addData);
// router.post('/education', addData);
// router.post('/job', addData);
// router.post('/task', addData);

export default router;

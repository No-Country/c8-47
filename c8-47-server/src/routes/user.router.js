import { Router } from 'express';

import { contactValidation } from '../middlewares/validations/user.js';
import {
  getContact,
  editContact,
  getSocial,
} from '../controllers/user.ctrl.js';

const router = Router();

router.get('/contact', getContact);
router.post('/contact', contactValidation, editContact);

router.get('/social', getSocial);
// router.post('/social', addSocial);
// router.put('/social', editSocial);
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

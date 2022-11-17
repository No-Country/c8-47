import { Router } from 'express';

//import {  } from '../middlewares/validations/contact.js';
import {
  getSocial,
  // addSocial,
  // editSocial,
} from '../controllers/user.ctrl.js';

const router = Router();

router.get('/social', getSocial);
// router.post('/social',VALIDAR, addSocial);
// router.put('/social',VALIDAR, editSocial);

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

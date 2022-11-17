import { Router } from 'express';

//import {  } from '../middlewares/validations/social.js';
import {
  getSocial,
  addSocial,
  // editSocial,
} from '../controllers/social.ctrl.js';

const router = Router();

router.get('/', getSocial);
router.post('/', addSocial);
// router.put('/',VALIDAR, editSocial);

export default router;

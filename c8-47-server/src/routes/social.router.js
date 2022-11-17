import { Router } from 'express';

//import {  } from '../middlewares/validations/social.js';
import {
  getSocial,
  addSocial,
  // editSocial,
  deleteSocial,
} from '../controllers/social.ctrl.js';

const router = Router();

router.get('/', getSocial);
router.post('/', addSocial); //!VOLVER A VER validar
// router.put('/',VALIDAR, editSocial);
router.delete('/', deleteSocial);

export default router;

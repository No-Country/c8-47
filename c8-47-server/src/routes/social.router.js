import { Router } from 'express';

import { socialValidation } from '../middlewares/validations/social.js';
import {
  getSocial,
  addSocial,
  editSocial,
  deleteSocial,
} from '../controllers/social.ctrl.js';

const router = Router();

router.get('/', getSocial);
router.post('/', socialValidation, addSocial);
router.put('/', socialValidation, editSocial);
router.delete('/', deleteSocial);

export default router;

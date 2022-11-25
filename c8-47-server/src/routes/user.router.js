import { Router } from 'express';

import {
  modifyPasswordValidation,
  editNameValidation,
} from '../middlewares/validations/auth.js';
import {
  getUserData,
  modifyPassword,
  editName,
} from '../controllers/user.ctrl.js';

const router = Router();

router.get('/data', getUserData);
router.put('/password', modifyPasswordValidation, modifyPassword);
router.put('/name', editNameValidation, editName);

export default router;

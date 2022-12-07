import { Router } from 'express';

import {
  modifyPasswordValidation,
  editNameValidation,
  imageUrlValidation,
} from '../middlewares/validations/auth.js';
import {
  getUserData,
  modifyPassword,
  editName,
  changeImage,
} from '../controllers/user.ctrl.js';

const router = Router();

router.get('/data', getUserData);
router.put('/password', modifyPasswordValidation, modifyPassword);
router.put('/name', editNameValidation, editName);
router.post('/image', imageUrlValidation, changeImage);

export default router;

import { Router } from 'express';

import { signUp, logIn } from '../controllers/auth.ctrl.js';
import {
  signUpValidation,
  logInValidation,
} from '../middlewares/validations/auth.js';

const router = Router();

router.post('/signup', signUpValidation, signUp);
router.post('/login', logInValidation, logIn);

export default router;

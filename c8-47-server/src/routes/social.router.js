import { Router } from 'express';

import { socialValidation } from '../middlewares/validations/social.js';
import { addSocial } from '../controllers/social.ctrl.js';

const router = Router();

router.post('/', socialValidation, addSocial);

export default router;

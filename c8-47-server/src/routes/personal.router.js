import { Router } from 'express';

import { personalValidation } from '../middlewares/validations/personal.js';
import { getPersonal, addPersonal } from '../controllers/personal.ctrl.js';

const router = Router();

router.get('/', getPersonal);
router.post('/', personalValidation, addPersonal);

export default router;

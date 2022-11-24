import { Router } from 'express';

import { personalValidation } from '../middlewares/validations/personal.js';
import {
  getPersonals,
  addPersonal,
  editPersonal,
  deletePersonal,
} from '../controllers/personal.ctrl.js';

const router = Router();

router.get('/', getPersonals);
router.post('/', personalValidation, addPersonal);
router.put('/', personalValidation, editPersonal);
router.delete('/', deletePersonal);

export default router;

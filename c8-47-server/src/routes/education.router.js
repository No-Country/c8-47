import { Router } from 'express';

import { educationValidation } from '../middlewares/validations/education.js';
import {
  getEducation,
  addEducation,
  editEducation,
  deleteEducation,
} from '../controllers/education.ctrl.js';

const router = Router();

router.get('/', getEducation);
router.post('/', educationValidation, addEducation);
router.put('/', educationValidation, editEducation);
router.delete('/', deleteEducation);

export default router;

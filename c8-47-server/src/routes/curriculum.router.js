import { Router } from 'express';

import {
  addCvValidation,
  statusValidation,
} from '../middlewares/validations/curriculum.js';
import {
  getCurriculums,
  addCurriculum,
  editCurriculumStatus,
  deleteCurriculum,
} from '../controllers/curriculum.ctrl.js';

const router = Router();

router.get('/', getCurriculums);
router.post('/', addCvValidation, addCurriculum);
router.put('/', statusValidation, editCurriculumStatus);
router.delete('/', deleteCurriculum);

export default router;

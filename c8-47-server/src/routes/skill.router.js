import { Router } from 'express';

import { skillValidation } from '../middlewares/validations/skill.js';
import {
  getSkills,
  addSkill,
  editSkill,
  deleteSkill,
} from '../controllers/skill.ctrl.js';

const router = Router();

router.get('/', getSkills);
router.post('/', skillValidation, addSkill);
router.put('/', skillValidation, editSkill);
router.delete('/', deleteSkill);

export default router;

import { Router } from 'express';

import { tagValidation } from '../middlewares/validations/tag.js';
import {
  getTags,
  addTag,
  editTag,
  deleteTag,
} from '../controllers/tag.ctrl.js';

const router = Router();

router.get('/', getTags);
router.post('/', tagValidation, addTag);
router.put('/', tagValidation, editTag);
router.delete('/', deleteTag);

export default router;

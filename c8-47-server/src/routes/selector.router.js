import { Router } from 'express';

import {
  addSelectorValidation,
  editSelectorValidation,
} from '../middlewares/validations/selector.js';
import {
  getSelectors,
  addSelector,
  editSelector,
  deleteSelector,
} from '../controllers/selector.ctrl.js';

const router = Router();

router.get('/', getSelectors);
router.post('/', addSelectorValidation, addSelector);
router.put('/', editSelectorValidation, editSelector);
router.delete('/', deleteSelector);

export default router;

import { Router } from 'express';

import { presentationValidation } from '../middlewares/validations/presentation.js';
import {
  getPresentations,
  addPresentation,
  editPresentation,
  deletePresentation,
} from '../controllers/presentation.ctrl.js';

const router = Router();

router.get('/', getPresentations);
router.post('/', presentationValidation, addPresentation);
router.put('/', presentationValidation, editPresentation);
router.delete('/', deletePresentation);

export default router;

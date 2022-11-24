import { Router } from 'express';

import { languageValidation } from '../middlewares/validations/language.js';
import {
  getLanguages,
  addLanguage,
  editLanguage,
  deleteLanguage,
} from '../controllers/language.ctrl.js';

const router = Router();

router.get('/', getLanguages);
router.post('/', languageValidation, addLanguage);
router.put('/', languageValidation, editLanguage);
router.delete('/', deleteLanguage);

export default router;

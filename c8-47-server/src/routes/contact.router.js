import { Router } from 'express';

import { contactValidation } from '../middlewares/validations/contact.js';
import { getContact, editContact } from '../controllers/contact.ctrl.js';

const router = Router();

router.get('/', getContact);
router.post('/', contactValidation, editContact);

export default router;

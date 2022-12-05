import { Router } from 'express';

import { addressValidation } from '../middlewares/validations/address.js';
import { getAddress, editAddress } from '../controllers/address.ctrl.js';

const router = Router();

router.get('/', getAddress);
router.post('/', addressValidation, editAddress);

export default router;

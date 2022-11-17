import { Router } from 'express';

import { verifyToken, verifyAdmin } from '../middlewares/verifyAuth.js';

import {
  testController,
  authenticationRequired,
  adminRequired,
} from '../controllers/test.ctrl.js';

const router = Router();

router.get('/', testController);
router.get('/auth', verifyToken, authenticationRequired);
router.get('/admin', verifyAdmin, adminRequired);

export default router;

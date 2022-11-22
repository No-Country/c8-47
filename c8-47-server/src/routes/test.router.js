import { Router } from 'express';

import { verifyToken, verifyAdmin } from '../middlewares/verifyAuth.js';

import {
  testController,
  authenticationRequired,
  adminRequired,
  userData,
} from '../controllers/test.ctrl.js';

const router = Router();

router.get('/', testController);
router.get('/auth', verifyToken, authenticationRequired);
router.get('/admin', verifyAdmin, adminRequired);
router.get('/user', verifyToken, userData);

export default router;

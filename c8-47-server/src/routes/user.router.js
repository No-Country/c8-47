import { Router } from 'express';

import { addData } from '../controllers/user.ctrl';

const router = Router();

router.post('/data', addData);

export default router;

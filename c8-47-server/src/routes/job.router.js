import { Router } from 'express';

// import { jobValidation } from '../middlewares/validations/job.js';
import {
  getJob,
  addJob,
  //   editJob,
  //   deleteJob,
} from '../controllers/job.ctrl.js';

const router = Router();

router.get('/', getJob);
// router.post('/', jobValidation, addJob);
// router.put('/', jobValidation, editJob);
// router.delete('/', deleteJob);

export default router;

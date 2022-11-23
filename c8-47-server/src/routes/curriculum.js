import { Router } from 'express';

// import { addCvValidation, editCvValidation } from '../middlewares/validations/curriculum.js';
import {
  getCurriculums,
  //   addCurriculum,
  //   editCurriculum,
  //   deleteCurriculum,
} from '../controllers/curriculum.ctrl.js';

const router = Router();

router.get('/', getCurriculums);
// router.post('/', addCvValidation, addCurriculum);
// router.put('/', editCvValidation, editCurriculum);
// router.delete('/', deleteCurriculum);

export default router;

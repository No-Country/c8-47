import { Router } from 'express';

// import {  } from '../middlewares/validations/personal.js';
import {
  getPersonal,
  addPersonal,
  editPersonal,
} from '../controllers/personal.ctrl.js';

const router = Router();

router.get('/', getPersonal);
// router.post('/', VALIDAR, addPersonal);
// router.put('/', VALIDAR, editPersonal);

export default router;

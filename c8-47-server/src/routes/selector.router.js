import { Router } from 'express';

// import { selectorValidation } from '../middlewares/validations/selector.js';
import {
  getSelectors,
  //   addSelector,
  //   editSelector,
  //   deleteSelector,
} from '../controllers/selector.ctrl.js';

const router = Router();

router.get('/', getSelectors);
// router.post('/', selectorValidation, addSelector);
// router.put('/', selectorValidation, editSelector);
// router.delete('/', deleteSelector);

export default router;

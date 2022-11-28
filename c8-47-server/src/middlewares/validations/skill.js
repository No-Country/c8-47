import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const nameValidation = check('name')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el skill')
  .escape();

const skillValidation = [nameValidation, checkValidations];

export { skillValidation };

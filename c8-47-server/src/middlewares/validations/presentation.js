import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const textValidation = check('text')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el texto')
  .escape();

const presentationValidation = [textValidation, checkValidations];

export { presentationValidation };

import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const nameValidation = check('skills.*.name')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el skill')
  .isLength({ max: 32 })
  .withMessage('El skill acepta como máximo 32 caracteres')
  .escape();

const skillValidation = [nameValidation, checkValidations];

export { skillValidation };

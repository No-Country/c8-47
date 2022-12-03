import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const nameValidation = check('skill')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 32 })
  .withMessage('El skill acepta como máximo 32 caracteres')
  .escape();

const skillValidation = [nameValidation, checkValidations];

export { skillValidation };

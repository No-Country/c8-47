import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const urlValidation = check('url')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la URL')
  .isLength({ min: 6 })
  .withMessage('La URL debe tener al menos 6 caracteres')
  .isLength({ max: 64 })
  .withMessage('La URL acepta como máximo 64 caracteres')
  .escape();

const socialValidation = [urlValidation, checkValidations];

export { socialValidation };

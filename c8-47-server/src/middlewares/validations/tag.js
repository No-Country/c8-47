import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const nameValidation = check('name')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el tag')
  .isLength({ max: 32 })
  .withMessage('El tag acepta como máximo 32 caracteres')
  .escape();

const descriptionValidation = check('description')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 256 })
  .withMessage('La descripción acepta como máximo 256 caracteres')
  .escape();

const tagValidation = [nameValidation, descriptionValidation, checkValidations];

export { tagValidation };

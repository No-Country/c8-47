import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const headingValidation = check('heading')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 64 })
  .withMessage('El heading acepta como máximo 64 caracteres')
  .escape();

const descriptionValidation = check('description')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 512 })
  .withMessage('La description acepta como máximo 512 caracteres')
  .escape();

const personalValidation = [
  headingValidation,
  descriptionValidation,
  checkValidations,
];

export { personalValidation };

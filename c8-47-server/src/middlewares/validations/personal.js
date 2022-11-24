import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const titleValidation = check('title')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 64 })
  .withMessage('El título acepta como máximo 64 caracteres')
  .escape();

const aboutValidation = check('about')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 512 })
  .withMessage('La campo "Sobre mi" acepta como máximo 512 caracteres')
  .escape();

const personalValidation = [titleValidation, aboutValidation, checkValidations];

export { personalValidation };

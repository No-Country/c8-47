import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const titleValidation = check('title')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la cabezera')
  .isLength({ max: 64 })
  .withMessage('El título acepta como máximo 64 caracteres')
  .escape();

const aboutValidation = check('about')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el apartado "Sobre mi"')
  .isLength({ max: 512 })
  .withMessage('La campo "Sobre mi" acepta como máximo 512 caracteres')
  .escape();

const personalValidation = [titleValidation, aboutValidation, checkValidations];

export { personalValidation };

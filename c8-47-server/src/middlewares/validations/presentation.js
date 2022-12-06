import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const titleValidation = check('title')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la cabecera')
  .isLength({ max: 64 })
  .withMessage('La cabecera acepta como máximo 64 caracteres')
  .escape();

const aboutValidation = check('about')
  .trim()
  .notEmpty()
  .withMessage('Completa el campo Acerca de mi')
  .isLength({ max: 512 })
  .withMessage('El campo "Acerca de mi" acepta como máximo 512 caracteres')
  .escape();

const textValidation = check('text')
  .trim()
  .optional({ checkFalsy: true })
  .escape();

const presentationValidation = [
  titleValidation,
  textValidation,
  aboutValidation,
  checkValidations,
];

export { presentationValidation };

import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const titleValidation = check('title')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el título')
  .isLength({ max: 64 })
  .withMessage('El título acepta como máximo 64 caracteres')
  .escape();

const institutionValidation = check('institution')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la institución')
  .isLength({ max: 64 })
  .withMessage('La institución acepta como máximo 64 caracteres')
  .escape();

//!VOLVER A VER preguntar con que formato van a enviar la fecha
const startDateValidation = check('start_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de inicio')
  .isLength({ max: 8 })
  .withMessage('La fecha de inicio acepta como máximo 8 caracteres')
  .escape();

const endDateValidation = check('end_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de finalización')
  .isLength({ max: 8 })
  .withMessage('La fecha de finalización acepta como máximo 8 caracteres')
  .escape();

const commentValidation = check('comment')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 256 })
  .withMessage('El comentario acepta como máximo 256 caracteres')
  .escape();

const educationValidation = [
  titleValidation,
  institutionValidation,
  startDateValidation,
  endDateValidation,
  commentValidation,
  checkValidations,
];

export { educationValidation };

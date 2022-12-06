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

const startDateValidation = check('start_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de inicio')
  .isLength({ max: 10 })
  .withMessage('La fecha de inicio acepta como máximo 10 caracteres')
  .escape();

const endDateValidation = check('end_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de finalización')
  .isLength({ max: 10 })
  .withMessage('La fecha de finalización acepta como máximo 10 caracteres')
  .escape();

const commentValidation = check('comment')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 256 })
  .withMessage('El comentario acepta como máximo 256 caracteres')
  .escape();

const certificationValidation = check('certification')
  .isBoolean()
  .withMessage('certification solo acepta como valor "true" o "false"');

const educationValidation = [
  titleValidation,
  institutionValidation,
  startDateValidation,
  endDateValidation,
  commentValidation,
  certificationValidation,
  checkValidations,
];

export { educationValidation };

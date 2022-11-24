import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const organizationValidation = check('organization')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la organización')
  .isLength({ max: 64 })
  .withMessage('La organización acepta como máximo 64 caracteres')
  .escape();

const nameValidation = check('name')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 64 })
  .withMessage('El nombre acepta como máximo 64 caracteres')
  .escape();

const emailValidation = check('email')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el email')
  .isEmail()
  .withMessage('Ingresa un email válido')
  .toLowerCase()
  .isLength({ max: 64 })
  .withMessage('El email debe tener como máximo 64 caracteres')
  .escape();

const selectorValidation = [
  nameValidation,
  organizationValidation,
  emailValidation,
  checkValidations,
];

export { selectorValidation };

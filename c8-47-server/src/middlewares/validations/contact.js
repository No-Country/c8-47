import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const emailValidation = check('email')
  .trim()
  .notEmpty()
  .withMessage('Ingresa tu email')
  .isEmail()
  .withMessage('Ingresa un email válido')
  .toLowerCase()
  .isLength({ max: 64 })
  .withMessage('El email debe tener como máximo 64 caracteres')
  .escape();

const phoneValidation = check('phone')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ min: 8 })
  .withMessage('El campo Teléfono debe tener al menos 8 caracteres')
  .matches(/^[+]?[0-9]*$/)
  .withMessage('El campo Teléfono solo acepta números')
  .escape();

const contactValidation = [emailValidation, phoneValidation, checkValidations];

export { contactValidation };

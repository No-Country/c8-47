import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const nameValidation = check('name')
  .isString()
  .withMessage('Ingresa un nombre válido')
  .trim()
  .notEmpty()
  .withMessage('Ingresa un nombre válido')
  .isLength({ min: 2 })
  .withMessage('El campo Nombre debe tener al menos 2 caracteres')
  .isLength({ max: 64 })
  .withMessage('El campo Nombre debe tener como máximo 64 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)
  .withMessage('El campo Nombre solo acepta letras')
  .toLowerCase()
  .escape();

const birthValidation = check('birth')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ max: 10 })
  .withMessage('La fecha de nacimiento acepta como máximo 10 caracteres')
  .escape();

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

/* const titleValidation = check('title')
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
  .escape(); */

const personalValidation = [
  nameValidation,
  birthValidation,
  emailValidation,
  phoneValidation,
  /*   titleValidation,
  aboutValidation, */
  checkValidations,
];

export { personalValidation };

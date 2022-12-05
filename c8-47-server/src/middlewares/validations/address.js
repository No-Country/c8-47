import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const countryValidation = check('country')
  .isString()
  .withMessage('Ingresa un País válido')
  .trim()
  .notEmpty()
  .withMessage('Ingresa un País válido')
  .isLength({ max: 24 })
  .withMessage('El campo País debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)
  .withMessage('El campo País solo acepta letras')
  .toLowerCase()
  .escape();

const stateValidation = check('state')
  .isString()
  .withMessage('Ingresa un Estado válido')
  .trim()
  .notEmpty()
  .withMessage('Ingresa un Estado válido')
  .isLength({ max: 24 })
  .withMessage('El campo Estado debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)
  .withMessage('El campo Estado solo acepta letras')
  .toLowerCase()
  .escape();

const cityValidation = check('city')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa una Ciudad válida')
  .trim()
  .isLength({ max: 24 })
  .withMessage('El campo Ciudad debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
  .withMessage('El campo Ciudad solo acepta letras y números')
  .toLowerCase()
  .escape();

const zipCodeValidation = check('zip_code')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa un Código Postal válido')
  .trim()
  .isLength({ max: 12 })
  .withMessage('El campo Código Postal debe tener como máximo 12 caracteres')
  .matches(/^[0-9]+$/)
  .withMessage('El campo Código Postal solo acepta números')
  .escape();

const streetNameValidation = check('street_name')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa una Calle válida')
  .trim()
  .isLength({ max: 24 })
  .withMessage('El campo Calle debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
  .withMessage('El campo Calle solo acepta letras y números')
  .toLowerCase()
  .escape();

const streetNumberValidation = check('street_number')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa un Número válido')
  .trim()
  .isLength({ max: 8 })
  .withMessage('El campo Número debe tener como máximo 8 caracteres')
  .matches(/^[0-9]+$/)
  .withMessage('El campo Número solo acepta números')
  .toLowerCase()
  .escape();

const doorValidation = check('door')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa un Departamento válido')
  .trim()
  .isLength({ max: 8 })
  .withMessage('El campo Departamento debe tener como máximo 8 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
  .withMessage('El campo Departamento solo acepta letras y números')
  .toLowerCase()
  .escape();

const addressValidation = [
  countryValidation,
  stateValidation,
  cityValidation,
  zipCodeValidation,
  streetNameValidation,
  streetNumberValidation,
  doorValidation,
  checkValidations,
];

export { addressValidation };

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

const ubicationValidation = check('address')
  .optional({ checkFalsy: true })
  .isString()
  .withMessage('Ingresa una Dirección válido')
  .trim()
  .isLength({ max: 24 })
  .withMessage('El campo Dirección debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
  .withMessage('El campo Dirección solo acepta letras y números')
  .toLowerCase()
  .escape();

const addressValidation = [
  countryValidation,
  stateValidation,
  cityValidation,
  ubicationValidation,
  checkValidations,
];

export { addressValidation };

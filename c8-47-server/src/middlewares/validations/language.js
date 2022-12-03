import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const languageNameValidation = check('language')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el idioma')
  .isLength({ min: 2 })
  .withMessage('El idioma al menos debe tener 2 caracteres')
  .isLength({ max: 16 })
  .withMessage('El idioma acepta como máximo 16 caracteres')
  .escape();

const levelValidation = check('level')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el nivel')
  .isLength({ min: 2 })
  .withMessage('El nivel al menos debe tener 2 caracteres')
  .isLength({ max: 16 })
  .withMessage('El nivel acepta como máximo 16 caracteres')
  .escape();

const languageValidation = [
  languageNameValidation,
  levelValidation,
  checkValidations,
];

export { languageValidation };

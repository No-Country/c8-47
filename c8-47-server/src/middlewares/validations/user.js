import { check } from 'express-validator';

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

const webValidation = check('web')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ min: 6 })
  .withMessage('La URL debe tener al menos 6 caracteres')
  .isLength({ max: 64 })
  .withMessage('La URL acepta como máximo 64 caracteres')
  .escape();

const phoneValidation = check('phone')
  .trim()
  .optional({ checkFalsy: true })
  .isLength({ min: 8 })
  .withMessage('El campo Teléfono debe tener al menos 8 caracteres')
  .matches(/^[+]?[0-9]*$/)
  .withMessage('El campo Teléfono solo acepta números')
  .escape();

const addressValidation = [
  check('address.state')
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
    .escape(),

  check('address.city')
    .isString()
    .withMessage('Ingresa una Ciudad válida')
    .trim()
    .notEmpty()
    .withMessage('Ingresa una Ciudad válida')
    .isLength({ max: 24 })
    .withMessage('El campo Ciudad debe tener como máximo 24 caracteres')
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
    .withMessage('El campo Ciudad solo acepta letras y números')
    .toLowerCase()
    .escape(),

  check('address.zip_code')
    .isString()
    .withMessage('Ingresa un Código Postal válido')
    .trim()
    .notEmpty()
    .withMessage('Ingresa un Código Postal válido')
    .isLength({ max: 12 })
    .withMessage('El campo Código Postal debe tener como máximo 12 caracteres')
    .matches(/^[0-9]+$/)
    .withMessage('El campo Código Postal solo acepta números')
    .escape(),

  check('address.street_name')
    .isString()
    .withMessage('Ingresa una Calle válida')
    .trim()
    .notEmpty()
    .withMessage('Ingresa una Calle válida')
    .isLength({ max: 24 })
    .withMessage('El campo Calle debe tener como máximo 24 caracteres')
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
    .withMessage('El campo Calle solo acepta letras y números')
    .toLowerCase()
    .escape(),

  check('address.street_number')
    .isString()
    .withMessage('Ingresa un Número válida')
    .trim()
    .notEmpty()
    .withMessage('Ingresa un Número válida')
    .isLength({ max: 24 })
    .withMessage('El campo Número debe tener como máximo 24 caracteres')
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
    .withMessage('El campo Número solo acepta letras y números')
    .toLowerCase()
    .escape(),
];

const contactValidation = [
  emailValidation,
  webValidation,
  phoneValidation,
  addressValidation,
];

export { contactValidation };

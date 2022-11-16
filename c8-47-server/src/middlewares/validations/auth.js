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

const passwordLogInValidation = check('password')
  .trim()
  .notEmpty()
  .withMessage('Ingresa tu contraseña')
  .isLength({ max: 64 })
  .withMessage('La contraseña acepta como máximo 64 caracteres')
  .escape();

const passwordSignUpValidation = check('password')
  .trim()
  .notEmpty()
  .withMessage('Ingresa tu contraseña')
  .isLength({ min: 8 })
  .withMessage(
    'La contraseña debe tener al menos 8 caracteres, una letra en mayúscula, una letra en minúscula y un número'
  )
  .isLength({ max: 64 })
  .withMessage('La contraseña acepta como máximo 64 caracteres')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
  .withMessage(
    'La contraseña debe tener al menos 8 caracteres, una letra en mayúscula, una letra en minúscula y un número'
  )
  .escape();

const confirmPasswordValidation = check('confirm_password')
  .trim()
  .notEmpty()
  .withMessage('Repite tu contraseña')
  .escape()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Las contraseñas no coinciden');
    } else {
      return value;
    }
  });

const firstNameValidation = check('first_name')
  .isString()
  .withMessage('Ingresa un nombre válido')
  .trim()
  .notEmpty()
  .withMessage('Ingresa un nombre válido')
  .isLength({ min: 2 })
  .withMessage('El campo Nombre debe tener al menos 2 caracteres')
  .isLength({ max: 24 })
  .withMessage('El campo Nombre debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)
  .withMessage('El campo Nombre solo acepta letras')
  .toLowerCase()
  .escape();

const lastNameValidation = check('last_name')
  .isString()
  .withMessage('Ingresa un apellido válido')
  .trim()
  .notEmpty()
  .withMessage('Ingresa un apellido válido')
  .isLength({ min: 2 })
  .withMessage('El campo Apellido debe tener al menos 2 caracteres')
  .isLength({ max: 24 })
  .withMessage('El campo Apellido debe tener como máximo 24 caracteres')
  .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)
  .withMessage('El campo Apellido solo acepta letras')
  .toLowerCase()
  .escape();

const signUpValidation = [
  emailValidation,
  passwordSignUpValidation,
  confirmPasswordValidation,
  firstNameValidation,
  lastNameValidation,
];

const logInValidation = [emailValidation, passwordLogInValidation];

export { signUpValidation, logInValidation };

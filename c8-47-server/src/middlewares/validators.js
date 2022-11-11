import { check } from "express-validator";

const emailValidation = check("email")
  .trim()
  .notEmpty()
  .withMessage("Ingresa tu email")
  .isEmail()
  .withMessage("Ingresa un email válido")
  .toLowerCase()
  .escape();

const passwordValidation = check("password")
  .trim()
  .notEmpty()
  .withMessage("Ingresa tu contraseña")
  .isLength({ min: 8 })
  .withMessage("La contraseña debe tener al menos 8 caracteres")
  .isLength({ max: 32 })
  .withMessage("La contraseña acepta como máximo 32 caracteres")
  .escape();

const repeatPasswordValidation = check("repeat_password")
  .trim()
  .notEmpty()
  .withMessage("Repite tu contraseña")
  .escape()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    } else {
      return value;
    }
  });

const firstNameValidation = check("first_name")
  .isString()
  .withMessage("Ingresa un nombre válido")
  .trim()
  .notEmpty()
  .withMessage("Ingresa un nombre válido")
  .isLength({ min: 2 })
  .withMessage("El campo Nombre debe tener al menos 2 caracteres")
  .isLength({ max: 24 })
  .withMessage("El campo Nombre debe tener como máximo 24 caracteres")
  .toLowerCase()
  .escape();

const lastNameValidation = check("last_name")
  .isString()
  .withMessage("Ingresa un apellido válido")
  .trim()
  .notEmpty()
  .withMessage("Ingresa un apellido válido")
  .isLength({ min: 2, max: 24 })
  .withMessage("El campo Apellido debe tener al menos 2 caracteres")
  .isLength({ max: 24 })
  .withMessage("El campo Nombre debe tener como máximo 24 caracteres")
  .toLowerCase()
  .escape();

const signUpValidation = [
  emailValidation,
  passwordValidation,
  repeatPasswordValidation,
  firstNameValidation,
  lastNameValidation,
];

const logInValidation = [emailValidation, passwordValidation];

export { signUpValidation, logInValidation };

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
  .isLength({ min: 6 })
  .withMessage("La contraseña debe tener al menos 6 caracteres")
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
  .trim()
  .notEmpty()
  .withMessage("Ingresa un nombre válido")
  .isLength({ min: 2 })
  .withMessage("El campo Nombre debe tener al menos 2 caracteres")
  .toLowerCase()
  .escape();

const lastNameValidation = check("last_name")
  .trim()
  .notEmpty()
  .withMessage("Ingresa un apellido válido")
  .isLength({ min: 2 })
  .withMessage("El campo Apellido debe tener al menos 2 caracteres")
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

import { body, check } from "express-validator";

const emailValidation = body("email", "Ingresa un email válido")
  .trim()
  .notEmpty()
  .isEmail()
  .escape();

const passwordValidation = body("password", "Ingresa una contraseña válida")
  .trim()
  .notEmpty()
  .isLength({ min: 6 })
  .escape();

const repeatPasswordValidation = body(
  "repeat_password",
  "Ingresa una contraseña válida"
)
  .trim()
  .notEmpty()
  .isLength({ min: 6 })
  .escape()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas deben coincidir");
    } else {
      return value;
    }
  });

const firstNameValidation = body("first_name", "Ingresa un nombre válido")
  .trim()
  .notEmpty()
  .isLength({ min: 6 })
  .escape();

const lastNameValidation = body("last_name", "Ingresa una apellido válido")
  .trim()
  .notEmpty()
  .isLength({ min: 6 })
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

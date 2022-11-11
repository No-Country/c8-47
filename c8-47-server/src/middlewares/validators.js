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

const signUpValidation = [
  emailValidation,
  passwordValidation,
  repeatPasswordValidation,
];

const logInValidation = [emailValidation, passwordValidation];

export { signUpValidation, logInValidation };

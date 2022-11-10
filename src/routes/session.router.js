import { Router } from "express";
import { body } from "express-validator";

import { signUp, logIn } from "../controllers/session.ctrl.js";

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

const repPasswordValidation = body(
  "rep_password",
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

const router = Router();

router.post(
  "/signup", //!VOLVER A VER agregar require a toda la data de body
  [emailValidation, passwordValidation, repPasswordValidation],
  signUp
);
router.post("/login", [emailValidation, passwordValidation], logIn);

export default router;

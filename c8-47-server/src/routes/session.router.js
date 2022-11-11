import { Router } from "express";
import { body } from "express-validator";

import { signUp, logIn } from "../controllers/session.ctrl.js";
import { signUpValidation, logInValidation } from "../middlewares/validators";

const router = Router();

router.post(
  "/signup", //!VOLVER A VER agregar require a toda la data de body
  signUpValidation,
  signUp
);
router.post("/login", logInValidation, logIn);

export default router;

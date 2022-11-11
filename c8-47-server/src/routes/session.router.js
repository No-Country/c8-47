import { Router } from "express";

import { signUp, logIn } from "../controllers/session.ctrl.js";
import {
  signUpValidation,
  logInValidation,
} from "../middlewares/validators.js";

const router = Router();

router.post(
  "/signup", //!VOLVER A VER agregar require a toda la data de body
  signUpValidation,
  signUp
);
router.post("/login", logInValidation, logIn);

export default router;

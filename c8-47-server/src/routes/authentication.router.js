import { Router } from "express";

import { signUp, logIn } from "../controllers/authentication.ctrl.js";
import {
  signUpValidation,
  logInValidation,
} from "../middlewares/validators.js";

const router = Router();

router.post("/signup", signUpValidation, signUp);
router.post("/login", logInValidation, logIn);

export default router;

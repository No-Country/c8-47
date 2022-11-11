import { Router } from "express";

import {
  signUp,
  logIn,
  authenticationRequired,
  adminRequired,
} from "../controllers/authentication.ctrl.js";
import {
  signUpValidation,
  logInValidation,
} from "../middlewares/validators.js";
import { verifyToken, verifyAdmin } from "../middlewares/verify.js";

const router = Router();

router.post(
  "/signup", //!VOLVER A VER agregar require a toda la data de body
  signUpValidation,
  signUp
);
router.post("/login", logInValidation, logIn);

router.get("/authentication", verifyToken, authenticationRequired);
router.get("/admin", verifyToken, verifyAdmin, adminRequired);

export default router;

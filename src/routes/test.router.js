import { Router } from "express";

import { testController } from "../controllers/test.ctrl.js";

const router = Router();

router.get("/", testController);

export default router;

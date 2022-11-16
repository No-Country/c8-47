import { Router } from "express";

import testRouter from "./test.router.js";
import authRouter from "./auth.router.js";

const router = Router();

router.use("/test", testRouter);
router.use("/auth", authRouter);

export default router;

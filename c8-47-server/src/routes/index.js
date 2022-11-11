import { Router } from "express";

import testRouter from "./test.router.js";
import session from "./session.router.js";

const router = Router();

router.use("/test", testRouter);
router.use("/session", session);

export default router;

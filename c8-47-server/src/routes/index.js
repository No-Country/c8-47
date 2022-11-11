import { Router } from "express";

import testRouter from "./test.router.js";
import authentication from "./authentication.router.js";

const router = Router();

router.use("/test", testRouter);
router.use("/auth", authentication);

export default router;

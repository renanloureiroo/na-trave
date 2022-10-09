import { Router } from "express";
import { router as usersRouter } from "./users.js";
import { router as hunchsRouter } from "./hunchs.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/hunchs", hunchsRouter);

export { router };

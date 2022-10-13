import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

import { router as usersRouter } from "./users.js";
import { router as hunchsRouter } from "./hunchs.js";
import { router as gamesRouter } from "./games.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/games", ensureAuthenticated, gamesRouter);
router.use("/hunchs", ensureAuthenticated, hunchsRouter);

export { router };

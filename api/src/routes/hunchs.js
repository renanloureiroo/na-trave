import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";
import CreateHunch from "../modules/Hunchs/useCases/CreateHunch/createHunch.controller.js";
const router = Router();

router.post("/", ensureAuthenticated, CreateHunch.handle);

export { router };

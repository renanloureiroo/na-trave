import { Router } from "express";

import CreateHunch from "../modules/Hunchs/useCases/CreateHunch/createHunch.controller.js";
import listHunchsController from "../modules/Hunchs/useCases/listHunchs/listHunchs.controller.js";

const router = Router();

router.get("/", listHunchsController.handle);
router.post("/", CreateHunch.handle);

export { router };

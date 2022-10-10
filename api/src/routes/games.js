import { Router } from "express";

import ListGamesController from "../modules/Games/useCases/ListGames/listGames.controller.js";

const router = Router();

router.get("/", ListGamesController.handle);

export { router };

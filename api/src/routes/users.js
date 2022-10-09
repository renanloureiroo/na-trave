import { Router } from "express";
import CreateAccountController from "../../src/modules/Users/UseCases/CreateAccount/createAccount.controller.js";

const router = Router();

router.post("/", CreateAccountController.handle);

export { router };

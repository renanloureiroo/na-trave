import { Router } from "express";
import CreateAccountController from "../../src/modules/Accounts/UseCases/CreateAccount/createAccount.controller.js";

const router = Router();

router.post("/", CreateAccountController.handle);

export { router };

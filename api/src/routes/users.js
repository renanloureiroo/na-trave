import { Router } from "express";
import CreateAccountController from "../modules/Accounts/UseCases/CreateAccount/createAccount.controller.js";
import AuthenticateController from "../modules/Accounts/UseCases/Authentication/authentication.controller.js";

const router = Router();

router.post("/", CreateAccountController.handle);
router.post("/signin", AuthenticateController.handle);

export { router };

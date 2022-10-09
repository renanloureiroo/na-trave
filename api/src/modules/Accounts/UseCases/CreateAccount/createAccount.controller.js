import CreateAccountService from "./createAccount.service.js";

class CreateAccountController {
  async handle(req, res) {
    const { name, email, username, password } = req.body;
    try {
      const user = await CreateAccountService.execute({
        name,
        email,
        username,
        password,
      });

      return res.status(201).json({ user });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}

export default new CreateAccountController();

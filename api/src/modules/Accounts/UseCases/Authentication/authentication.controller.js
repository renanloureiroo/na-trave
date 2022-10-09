import AuthenticationService from "./authentication.service.js";

class AuthenticationController {
  async handle(req, res) {
    const { email, password } = req.body;

    try {
      const { accessToken, refreshToken } = await AuthenticationService.execute(
        {
          email,
          password,
        }
      );

      return res.json({
        accessToken,
        refreshToken,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}
export default new AuthenticationController();

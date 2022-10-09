import RefreshTokenService from "./refreshToken.service.js";

class RefreshTokenController {
  async handle(req, res) {
    const { refreshToken } = req.body;

    try {
      const credentials = await RefreshTokenService.execute(refreshToken);

      return res.json({
        ...credentials,
      });
    } catch (err) {
      return res.status(401).json({
        error: err.message,
      });
    }
  }
}

export default new RefreshTokenController();

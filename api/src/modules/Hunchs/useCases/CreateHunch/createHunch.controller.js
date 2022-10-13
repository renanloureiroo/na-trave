import CreateHunchService from "./createHunch.service.js";

class CreateHunchController {
  async handle(req, res) {
    const { gameId, homeTeamScore, awayTeamScore } = req.body;
    const userId = req.user.id;

    try {
      const hunch = await CreateHunchService.execute({
        userId,
        gameId,
        homeTeamScore,
        awayTeamScore,
      });

      return res.status(201).json({
        hunch,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}

export default new CreateHunchController();

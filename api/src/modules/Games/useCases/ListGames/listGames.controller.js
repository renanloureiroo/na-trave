import ListGamesService from "./listGames.service.js";

class ListGamesController {
  async handle(req, res) {
    try {
      const games = await ListGamesService.execute();

      return res.json(games);
    } catch (err) {
      return res.status(400).end();
    }
  }
}

export default new ListGamesController();

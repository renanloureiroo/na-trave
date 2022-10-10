import ListHunchsService from "./listHunchs.service.js";

class ListHunchsController {
  async handle(req, res) {
    const userId = req.user.id;

    try {
      const hunchs = await ListHunchsService.execute(userId);

      return res.json(hunchs);
    } catch (err) {
      return res.status(500).end();
    }
  }
}

export default new ListHunchsController();

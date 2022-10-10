import { prisma } from "../../../../database/prisma/index.js";

class ListGames {
  async execute() {
    return prisma.game.findMany({});
  }
}

export default new ListGames();

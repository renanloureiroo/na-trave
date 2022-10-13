import { prisma } from "../../../../database/prisma/index.js";

class ListGames {
  async execute(userId) {
    return prisma.game.findMany({
      include: {
        Hunches: {
          where: {
            userId,
          },
        },
      },
    });
  }
}

export default new ListGames();

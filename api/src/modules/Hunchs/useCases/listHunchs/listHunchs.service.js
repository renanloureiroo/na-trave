import { prisma } from "../../../../database/prisma/index.js";

class ListHunchsService {
  async execute(userId) {
    return await prisma.hunch.findMany({
      where: {
        userId,
      },
      include: {
        game: true,
      },
    });
  }
}

export default new ListHunchsService();

import { prisma } from "../../../../database/prisma/index.js";

class ListHunchsService {
  async execute(userId) {
    const hunchs = await prisma.hunch.findMany({
      where: {
        userId,
      },
      include: {
        game: true,
      },
    });
    return hunchs;
  }
}

export default new ListHunchsService();

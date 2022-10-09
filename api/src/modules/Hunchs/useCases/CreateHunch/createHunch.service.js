import { prisma } from "../../../../database/prisma/index.js";

class CreateHunch {
  async execute({ userId, gameId, homeTeamScore = 0, awayTeamScore = 0 }) {
    console.log({ userId, gameId, homeTeamScore, awayTeamScore });

    if (!homeTeamScore && !awayTeamScore) {
      throw new Error("Missing score");
    }

    const data = {
      userId,
      gameId,
      homeTeamScore,
      awayTeamScore,
    };

    const hunchAlreadyExists = await prisma.hunch.findFirst({
      where: {
        userId,
        gameId,
      },
    });

    if (hunchAlreadyExists) {
      return await prisma.hunch.update({
        where: {
          id: hunchAlreadyExists.id,
        },
        data,
      });
    }

    return await prisma.hunch.create({
      data: data,
    });
  }
}

export default new CreateHunch();

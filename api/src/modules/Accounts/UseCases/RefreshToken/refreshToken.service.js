import jwt from "jsonwebtoken";
import { prisma } from "../../../../database/prisma/index.js";

class RefreshToken {
  async execute(token) {
    const { sub, exp } = jwt.decode(token);

    const user = await prisma.user.findFirst({
      where: {
        id: sub,
      },
    });

    if (!user) {
      throw new Error("User not found!");
    }
    const isValid = jwt.verify(token, process.env.JWT_SCRET_KEY);

    if (!isValid) {
      throw new Error("Invalid token");
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        username: user.username,
      },
      process.env.JWT_SCRET_KEY,
      {
        subject: user.id,
        expiresIn: 15 * 60, // 15 min
      }
    );

    const refreshToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        username: user.username,
      },
      process.env.JWT_SCRET_KEY,
      {
        subject: user.id,
        expiresIn: "15d", // 15 daysß
      }
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}

export default new RefreshToken();

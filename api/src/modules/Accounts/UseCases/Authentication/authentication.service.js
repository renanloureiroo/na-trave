import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { prisma } from "../../../../database/prisma/index.js";

class AuthenticationService {
  async execute({ email, password }) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    console.log(user);

    if (!user) {
      throw new Error("Email ou password incorrect!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou password incorrect!");
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
        expiresIn: 15, // 15 min
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
        expiresIn: "15d", // 15 days
      }
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthenticationService();

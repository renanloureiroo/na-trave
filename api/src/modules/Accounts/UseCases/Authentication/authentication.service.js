import bcrypt from "bcrypt";

import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prisma/index.js";

class AuthenticationService {
  async execute({ email, password }) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email ou password incorrect!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou password incorrect!");
    }

    const accessToken = sign(
      {
        id: user.id,
        name: user.name,
        username: user.username,
      },
      process.env.JWT_SCRET_KEY,
      {
        subject: user.id,
        expiresIn: 60 * 15, // 15 min
      }
    );
  }
}

export default new AuthenticationService();

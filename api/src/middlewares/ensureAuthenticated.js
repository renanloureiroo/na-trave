import jwt from "jsonwebtoken";
import { prisma } from "../database/prisma/index.js";

async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      erro: "Missing accessToken",
    });
  }

  const [, accessToken] = authHeader.split(" ");

  try {
    const { sub: user_id } = jwt.verify(accessToken, process.env.JWT_SCRET_KEY);

    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      return res.status(401).json({
        error: "User does not exists!",
      });
    }
    req.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      error: "Invalid token!",
    });
  }
}

export { ensureAuthenticated };

import { prisma } from "../../../../database/prisma/index.js";
import bcryptjs from "bcryptjs";

class CreateAccountService {
  async execute({ name, email, username, password }) {
    const userAlreadyExits = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    console.log(userAlreadyExits);

    if (userAlreadyExits) {
      throw new Error("User Already Exists!");
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    const data = {
      name,
      email,
      username,
      password: hashedPassword,
    };

    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export default new CreateAccountService();

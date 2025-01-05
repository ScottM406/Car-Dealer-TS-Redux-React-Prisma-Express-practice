const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async register(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: { email, password: hashedPassword },
        });
        return user;
      },

      async login(email, password) {
        const user = await prisma.user.findUniqueOrThrow({
          where: { email },
        });
        const validCredentials = await bcrypt.compare(password, user.password);
        if (!validCredentials) throw Error("Invalid Credentials");
        return user;
      }
    }
  }
});

module.exports = prisma;
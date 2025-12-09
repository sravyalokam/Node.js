// // prisma.js
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// module.exports = prisma;

require("dotenv").config(); // loads .env
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // URL comes from .env
    },
  },
});

module.exports = prisma;

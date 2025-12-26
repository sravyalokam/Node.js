// prismaClient.js
import "dotenv/config";

// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "./prisma/generated/user/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
 
// Postgres driver adapter
// const adapter = new PrismaPg({
//   connectionString: process.env.USER_DB_URL,
// });

// const userDB = new PrismaClient({ adapter });
 
// export default userDB;
 
const userAdapter = new PrismaPg({
  connectionString: process.env.USER_DB_URL,
});

const userDB = new PrismaClient({
  adapter: userAdapter,
});

export default userDB;
import "dotenv/config";
import { PrismaClient } from "./prisma/generated/banking/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
 
const bankingAdapter = new PrismaPg({
  connectionString: process.env.BANKING_DB_URL,
});

const bankingDB = new PrismaClient({
  adapter: bankingAdapter,
});

export default bankingDB;
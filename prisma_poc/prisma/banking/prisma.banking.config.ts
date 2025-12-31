import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/banking/schema.prisma",
  migrations: {
    path: "prisma/banking/migrations",
    seed: "node prisma/banking/seed.js"
  },
  datasource: {
    url: env("BANKING_DB_URL"),
  },
});


// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/banking/schema.prisma",

//   migrations: {
//     path: "prisma/banking/migrations",
//     seed: "node prisma/banking/seed.js",
//   },

//   datasource: {
//     url: env("BANKING_DB_URL"),
//   },
// });




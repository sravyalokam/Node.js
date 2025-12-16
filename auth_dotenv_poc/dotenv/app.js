import dotenv from "dotenv";

import express from "express";
import authRoutes from "./routes/login.routes.js";

const app = express();
app.use(express.json());

// Determine environment
const ENV = process.env.NODE_ENV || "development";

// Load correct env file
dotenv.config({
  path: `.env.${ENV}`
});

// Read env variables
console.log("Environment:", process.env.NODE_ENV);
console.log("Database:", process.env.DB_NAME);
console.log("Secret:", process.env.SECRET);

// Mount your routes
app.use("/app", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
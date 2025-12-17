import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(passport.initialize());


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

import passport from "passport";
import "./config/passport.microsoft.js";
import express from "express";
import authRoutes from "./routes/login.routes.js";
import microsoftAuthRoutes from "./routes/microsoft_login.routes.js";
// Mount your routes
app.use("/app", authRoutes);
app.use("/app/auth/microsoft", microsoftAuthRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
const express = require("express");
const app = express();

// Global Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Routers
const userRouter = require("./routes/userRoutes");

// Built-in middleware
app.use(express.json());

// Global middleware
app.use(logger);

// Mount routers
app.use("/users", userRouter);

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;

import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express from "express";

const app = express();


import customerRoutes from "./routes/customer.routes.js";
import branchRoutes from "./routes/branch.routes.js";
import accountRoutes from "./routes/account.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import loanRoutes from "./routes/loan.routes.js";
import loanPaymentRoutes from "./routes/loanPayment.routes.js";
// import employeeRoutes from "./routes/employee.routes.js";
import loginRoutes from "./routes/login.routes.js";
import  { errorHandler } from './middleware/error.middleware.js';
import { requestLogger } from "./middleware/requestLogger.js";

app.use(express.json());
app.use(requestLogger);
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});
app.use("/login", loginRoutes);
app.use("/customers", customerRoutes);
app.use("/branches", branchRoutes);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);
app.use("/loans", loanRoutes);
app.use("/loan-payments", loanPaymentRoutes);
// app.use("/employees", employeeRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use(errorHandler);

export default app;

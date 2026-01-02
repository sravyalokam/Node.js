import express from "express";
import {
  createTransaction,
  getTransactions,
  countTransactions,
  getMinimumTransactionAmount,
  getAverageTransactionAmountByAccount,
  getTodayTransactions
} from "../controllers/transaction.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", createTransaction);
router.get("/", getTransactions);
router.get("/count", countTransactions);
router.get("/min-transaction-amount", getMinimumTransactionAmount);
router.get("/today-transactions", getTodayTransactions);
router.get("/avg-transaction/:id", getAverageTransactionAmountByAccount);


export default router;

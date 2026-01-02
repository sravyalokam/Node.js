import express from "express";
import {
  createAccount,
  getAccounts,
  countAccounts,
  countSavingsAccount,
  getTotalBalanceOfAccounts,
  getAverageAccountBalanace,
  getMaxAccountBalance,
  getAccountsSummary,
  groupByAccountTypes,
  orderByBalance,
  getAccountsWithCustomerAndBranch,
  getAccountById
} from "../controllers/account.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authenticate)
router.post("/", authorizeRoles("admin", "manager"), createAccount);
router.get("/", getAccounts);

router.get("/count", countAccounts);
router.get("/count-savings-account", countSavingsAccount);
router.get("/total-balance", getTotalBalanceOfAccounts);
router.get("/avg-account-balance", getAverageAccountBalanace);
router.get("/max-account-balance", getMaxAccountBalance);
router.get("/summary", getAccountsSummary);
router.get("/order-by-balance", orderByBalance);
router.get("/group-by-type", groupByAccountTypes);
router.get("/with-customer-branch", getAccountsWithCustomerAndBranch);
router.get("/:id", getAccountById)
export default router;

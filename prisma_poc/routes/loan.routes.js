import express from "express";
import {
  createLoan,
  getLoans,
  getTotalLoanIssuedToCustomer
} from "../controllers/loan.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();
router.use(authenticate);
router.post("/", createLoan);
router.get("/", getLoans);
router.get("/:id", getTotalLoanIssuedToCustomer);

export default router;

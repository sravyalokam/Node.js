import express from "express";
import {
  createLoanPayment,
  getLoanPayments,
} from "../controllers/loanPayment.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();
router.use(authenticate);
router.post("/", createLoanPayment);
router.get("/", getLoanPayments);

export default router;

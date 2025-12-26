import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";


/* CREATE LOAN PAYMENT */
export const createLoanPayment = asyncHandler(async (req, res) => {
  const payment = await prisma.loan_payments.create({
    data: req.body
  });

  res.status(201).json(payment);
});


/* GET ALL LOAN PAYMENTS */
export const getLoanPayments = asyncHandler(async (req, res) => {
  const payments = await prisma.loan_payments.findMany();
  res.json(payments);
});

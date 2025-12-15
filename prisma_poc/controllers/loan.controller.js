import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";


/* CREATE LOAN */
export const createLoan = asyncHandler(async (req, res) => {
  const loan = await prisma.loans.create({
    data: req.body
  });

  res.status(201).json(loan);
});


/* GET ALL LOANS */
export const getLoans = asyncHandler(async (req, res) => {
  const loans = await prisma.loans.findMany();
  res.json(loans);
});


/* TOTAL LOAN ISSUED TO A CUSTOMER */
export const getTotalLoanIssuedToCustomer = asyncHandler(async (req, res) => {
  const customerId = Number(req.params.id);

  const result = await prisma.loans.aggregate({
    _sum: { amount: true },
    where: { customer_id: customerId }
  });

  const totalLoanAmount = result._sum.amount || 0;

  res.json({
    customer_id: customerId,
    totalLoanAmount
  });
});

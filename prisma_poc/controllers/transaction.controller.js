import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";


/* CREATE TRANSACTION(S) */
export const createTransaction = asyncHandler(async (req, res) => {
  const transactions = await prisma.transactions.createMany({
    data: req.body   // expect array of transactions
  });

  res.status(201).json(transactions);
});


/* GET ALL TRANSACTIONS */
export const getTransactions = asyncHandler(async (req, res) => {
  const txns = await prisma.transactions.findMany();
  res.json(txns);
});


/* COUNT TRANSACTIONS */
export const countTransactions = asyncHandler(async (req, res) => {
  const count = await prisma.transactions.count();
  res.json({ totalTransactions: count });
});


/* MINIMUM TRANSACTION AMOUNT */
export const getMinimumTransactionAmount = asyncHandler(async (req, res) => {
  const result = await prisma.transactions.aggregate({
    _min: { amount: true }
  });

  res.json({
    minTransactionAmount: result._min.amount || 0
  });
});


/* AVERAGE TRANSACTION AMOUNT BY ACCOUNT */
export const getAverageTransactionAmountByAccount = asyncHandler(async (req, res) => {
  const accountId = Number(req.params.id);

  const result = await prisma.transactions.aggregate({
    _avg: { amount: true },
    where: { account_id: accountId }
  });

  res.json({
    account_id: accountId,
    averageTransactionAmount: result._avg.amount || 0
  });
});


/* TODAY'S TRANSACTIONS (UTC SAFE) */
export const getTodayTransactions = asyncHandler(async (req, res) => {
  const now = new Date();

  const startOfTodayUTC = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  ));

  const startOfTomorrowUTC = new Date(startOfTodayUTC);
  startOfTomorrowUTC.setUTCDate(startOfTomorrowUTC.getUTCDate() + 1);

  const count = await prisma.transactions.count({
    where: {
      transaction_date: {
        gte: startOfTodayUTC,
        lt: startOfTomorrowUTC
      }
    }
  });

  res.json({ todayTransactionCount: count });
});

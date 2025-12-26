import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createAccount = asyncHandler(async (req, res) => {
  const account = await prisma.accounts.create({
    data: req.body
  });
  res.json(account);
});

export const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await prisma.accounts.findMany({
    include: {
      customer: true,
      branch: true
    }
  });
  res.json(accounts);
});

// export const getAccounts = asyncHandler(async (req, res) => {
//   throw new Error("TEST ERROR");
// });


export const countAccounts = asyncHandler(async (req, res) => {
  const accountsCount = await prisma.accounts.count();
  res.json({ totalAccounts: accountsCount });
});


export const countSavingsAccount = asyncHandler(async (req, res) => {
  const savingsAccountCount = await prisma.accounts.count({
    where: {
      account_type: "Savings"
    }
  });
  res.json({ savingsAccountCount });
});


export const getTotalBalanceOfAccounts = asyncHandler(async (req, res) => {
  const totalBalance = await prisma.accounts.aggregate({
    _sum: {
      balance: true
    }
  });
  res.json({ totalAccountsBalance: totalBalance._sum.balance });
});


export const getAverageAccountBalanace = asyncHandler(async (req, res) => {
  const avgBalance = await prisma.accounts.aggregate({
    _avg: {
      balance: true
    }
  });
  res.json({ averageAccountsBalance: avgBalance._avg.balance });
});


export const getMaxAccountBalance = asyncHandler(async (req, res) => {
  const maxBalance = await prisma.accounts.aggregate({
    _max: {
      balance: true
    }
  });
  res.json({ maxAccountBalance: maxBalance._max.balance });
});


export const getAccountsSummary = asyncHandler(async (req, res) => {
  const summary = await prisma.accounts.aggregate({
    _count: true,
    _avg: { balance: true },
    _max: { balance: true },
    _min: { balance: true }
  });

  res.json({
    totalCount: summary._count,
    average: summary._avg.balance,
    min: summary._min.balance,
    max: summary._max.balance
  });
});


export const groupByAccountTypes = asyncHandler(async (req, res) => {
  const groupedAccounts = await prisma.accounts.groupBy({
    by: ["account_type"],
    _count: {
      account_id: true
    }
  });

  res.json({ groupByAccounts: groupedAccounts });
});


export const orderByBalance = asyncHandler(async (req, res) => {
  const orderedAccounts = await prisma.accounts.findMany({
    orderBy: {
      balance: "desc"
    }
  });

  res.json({ orderByBalance: orderedAccounts });
});


export const getAccountsWithCustomerAndBranch = asyncHandler(async (req, res) => {
  const accounts = await prisma.accounts.findMany({
    include: {
      customer: true,
      branch: true
    }
  });

  res.json(accounts);
});

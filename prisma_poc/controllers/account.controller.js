import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { ApiError } from '../middleware/error.middleware.js';
import { generateAccountNumber } from '../utils/accountNumberGenerator.js';

export const createAccount = asyncHandler(async (req, res) => {
  const { 
    balance = 0, 
    account_type = 'SAVINGS', 
    customer_id, 
    branch_id,
    interest_rate 
  } = req.body;

  // Validate required fields
  if (!customer_id) {
    throw new ApiError(400, "customer_id is required");
  }

  if (!branch_id) {
    throw new ApiError(400, "branch_id is required");
  }

  // Validate account type
  const validAccountTypes = ['SAVINGS', 'CURRENT', 'FIXED_DEPOSIT'];
  if (!validAccountTypes.includes(account_type)) {
    throw new ApiError(
      400, 
      `account_type must be one of: ${validAccountTypes.join(', ')}`
    );
  }

  // Validate balance
  if (balance < 0) {
    throw new ApiError(400, "balance cannot be negative");
  }

  // Validate customer exists
  const customerExists = await prisma.customers.findUnique({
    where: { customer_id: parseInt(customer_id) }
  });

  if (!customerExists) {
    throw new ApiError(404, "Customer not found");
  }

  // Validate branch exists
  const branchExists = await prisma.branches.findUnique({
    where: { branch_id: parseInt(branch_id) }
  });

  if (!branchExists) {
    throw new ApiError(404, "Branch not found");
  }

  // Generate unique account number
  const account_number = await generateAccountNumber();

  // Create account
  const account = await prisma.accounts.create({
    data: {
      account_number,
      balance: parseFloat(balance),
      account_type,
      status: 'ACTIVE',
      interest_rate: interest_rate ? parseFloat(interest_rate) : null,
      customer: {
        connect: { customer_id: parseInt(customer_id) }
      },
      branch: {
        connect: { branch_id: parseInt(branch_id) }
      }
    },
    include: {
      customer: {
        select: {
          customer_id: true,
          name: true,
          email: true,
          phone: true
        }
      },
      branch: {
        select: {
          branch_id: true,
          branch_name: true,
          city: true
        }
      }
    }
  });

  res.status(201).json({
    success: true,
    message: 'Account created successfully',
    data: account
  });
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

export const getAccountById = asyncHandler(async(req, res) => {
  const account = await prisma.accounts.findUnique({
     where: {
        account_id: req.params.id
     },
     include: {
      customer: {
        select: {
          customer_id: true,
          name: true,
          email: true,
          phone: true
        }
      },
      branch: {
        select: {
          branch_id: true,
          branch_name: true,
          city: true
        }
      },
      transactions: {
        take: 10,
        orderBy: {
          transaction_id: true,
          amount: true,
        }
      }
     }
  })

})
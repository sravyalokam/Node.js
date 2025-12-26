import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

/* CREATE BRANCH */
export const createBranch = asyncHandler(async (req, res) => {
  const branch = await prisma.branches.create({
    data: req.body
  });
  res.status(201).json(branch);
});


/* GET ALL BRANCHES */
export const getBranches = asyncHandler(async (req, res) => {
  const branches = await prisma.branches.findMany({
    include: { accounts: true }
  });
  res.json(branches);
});


/* COUNT BRANCHES */
export const getBranchCount = asyncHandler(async (req, res) => {
  const count = await prisma.branches.count();
  res.json({ count });
});


/* COUNT BY CITY */
export const getCountByBranch = asyncHandler(async (req, res) => {
  const city = req.params.city;

  const countByBranch = await prisma.branches.count({
    where: { city }
  });

  res.json({ city, count: countByBranch });
});


/* CUSTOMER COUNT PER BRANCH */
export const getBranchCustomerCount = asyncHandler(async (req, res) => {
  const branch = await prisma.branches.findUnique({
    where: { branch_id: Number(req.params.id) },
    include: { accounts: true }
  });

  if (!branch) {
    const error = new Error("Branch not found");
    error.statusCode = 404;
    throw error;
  }

  res.json({
    branch_id: branch.branch_id,
    customers: branch.accounts.length
  });
});


/* MIN & MAX BRANCH ID */
export const getBranchMinMax = asyncHandler(async (req, res) => {
  const result = await prisma.branches.aggregate({
    _min: { branch_id: true },
    _max: { branch_id: true }
  });

  res.json({
    min_branch_id: result._min.branch_id,
    max_branch_id: result._max.branch_id
  });
});


/* GROUP BY CITY */
export const getBranchesGroupedByCity = asyncHandler(async (req, res) => {
  const result = await prisma.branches.groupBy({
    by: ["city"],
    _count: { branch_id: true }
  });

  res.json(result);
});


/* AGGREGATE SUMMARY */
export const getBranchAggregateSummary = asyncHandler(async (req, res) => {
  const aggregate = await prisma.branches.aggregate({
    _count: { branch_id: true },
    _min: { branch_id: true },
    _max: { branch_id: true }
  });

  res.json({
    total_branches: aggregate._count.branch_id,
    min_branch_id: aggregate._min.branch_id,
    max_branch_id: aggregate._max.branch_id
  });
});


/* PAGINATION */
export const getBranchesPaginated = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const skip = (page - 1) * limit;

  const branches = await prisma.branches.findMany({
    skip,
    take: limit,
    include: { accounts: true }
  });

  const total = await prisma.branches.count();

  res.json({
    page,
    limit,
    totalRecords: total,
    totalPages: Math.ceil(total / limit),
    data: branches
  });
});

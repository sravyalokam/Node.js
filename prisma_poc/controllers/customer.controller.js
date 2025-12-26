import prisma from "../bankingClient.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

// export const getCustomerCount = async (req, res) => {
//   const count = await prisma.customers.aggregate({ _count: true });
//   res.json(count);
// };


// export const countCustomersByEmail = async (req, res) => {
//   const count = await prisma.customers.aggregate({
//     _count: {
//         email: true
//     }
//   });
//   res.json(count);
// };


/* TOTAL CUSTOMER COUNT */
export const getCustomerCount = asyncHandler(async (req, res) => {
  const count = await prisma.customers.count();
  res.json({ totalCustomers: count });
});


/* COUNT CUSTOMERS WITH EMAIL */
export const countCustomersByEmail = asyncHandler(async (req, res) => {
  const count = await prisma.customers.count({
    where: {
      email: { not: null }
    }
  });

  res.json({ customersWithEmail: count });
});


/* CREATE CUSTOMER */
export const createCustomer = asyncHandler(async (req, res) => {
  const customer = await prisma.customers.create({
    data: req.body
  });

  res.status(201).json(customer);
});


/* GET ALL CUSTOMERS */
export const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await prisma.customers.findMany();
  res.json(customers);
});


/* GET CUSTOMER BY ID */
export const getCustomerById = asyncHandler(async (req, res) => {
  const customerId = Number(req.params.id);

  const customer = await prisma.customers.findUnique({
    where: { customer_id: customerId }
  });

  if (!customer) {
    const error = new Error("Customer not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(customer);
});

export const uploadCustomerDoc = async (req, res, next) => {
  try {
    const { customer_id, doc_type } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const customerDoc = await prisma.customer_docs.create({
      data: {
        customer_id: parseInt(customer_id),
        doc_type: doc_type,
        doc_url: file.path,
      },
    });

    res.status(201).json({
      message: "Customer document uploaded successfully",
      data: customerDoc,
    });
  } catch (err) {
    next(err);
  }
};


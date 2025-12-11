import express from "express";
import prisma from "./prismaClient.js";

const app = express();

app.use(express.json());

async function run() {
  try {
    const customer = await prisma.customers.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        phone: "999888777"
      }
    });

    const branch = await prisma.branches.create({
      data: {
        branch_name: "Main Branch",
        city: "Hyderabad"
      }
    });

    const account = await prisma.accounts.create({
      data: {
        customer_id: customer.customer_id,
        branch_id: branch.branch_id,
        account_type: "Savings",
        balance: 5000.00
      }
    });

    const txn = await prisma.transactions.create({
      data: {
        account_id: account.account_id,
        amount: 1000.00,
        transaction_type: "Deposit"
      }
    });

    const loan = await prisma.loans.create({
      data: {
        customer_id: customer.customer_id,
        loan_type: "Car Loan",
        amount: 800000.00,
        interest_rate: 7.5
      }
    });

    const payment = await prisma.loan_payments.create({
      data: {
        loan_id: loan.loan_id,
        amount: 15000.00
      }
    });

    console.log("Data inserted successfully");
  } catch (err) {
    console.error(err);
  }
}

run();

// CREATE customer
app.post("/customers", async (req, res) => {
  try {
    const customer = await prisma.customers.create({
      data: req.body,
    });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all customers
app.get("/customers", async (req, res) => {
  try {
    const customers = await prisma.customers.findMany({
      include: {
        accounts: true,
        loans: true,
      },
    });
    res.json(customers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET one customer by ID
app.get("/customers/:id", async (req, res) => {
  try {
    const customer = await prisma.customers.findUnique({
      where: { customer_id: Number(req.params.id) },
      include: {
        accounts: true,
        loans: true,
      },
    });

    if (!customer) return res.status(404).json({ error: "Customer not found" });

    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE customer
app.put("/customers/:id", async (req, res) => {
  try {
    const updated = await prisma.customers.update({
      where: { customer_id: Number(req.params.id) },
      data: req.body,
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE customer
app.delete("/customers/:id", async (req, res) => {
  try {
    await prisma.customers.delete({
      where: { customer_id: Number(req.params.id) },
    });

    res.json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/branches", async (req, res) => {
    try {
        const branches = await prisma.branches.findMany();
        res.json(branches);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.post("/branches", async (req, res) => {
    try {
        const branches = await prisma.branches.create({
            data: req.body
        })
        res.json(branches);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
})

app.delete("/branch/:id", async (req, res) =>{
    try {
        await prisma.branches.delete({
            where: { branch_id : Number(req.params.id) }
        })
        res.json({ message: "Branch deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

import express from "express";
import prisma from "./prismaClient.js";

const app = express();

app.use(express.json());

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

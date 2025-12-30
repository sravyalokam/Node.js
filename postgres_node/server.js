import express from "express";
import prisma from "./prismaClient.js";

const app = express();
app.use(express.json());

// Get all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await prisma.emp.findMany();
    res.json(employees);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get employee by ID
app.get("/employees/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await prisma.emp.findUnique({
      where: { empid: Number(id) },
    });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Example route for users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

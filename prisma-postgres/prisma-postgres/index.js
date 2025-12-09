import express from "express";
import prisma from "./prismaClient.js";

const app = express();
app.use(express.json());

// Create employee
app.post("/employees", async (req, res) => {
  const { name, age, salary } = req.body;

  const employee = await prisma.employee.create({
    data: { name, age: Number(age), salary: Number(salary) },
  });

  res.json(employee);
});

// Get all employees
app.get("/employees", async (req, res) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
});

// Get employee by ID
app.get("/employees/:id", async (req, res) => {
  const employee = await prisma.employee.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(employee);
});

// Update employee
app.put("/employees/:id", async (req, res) => {
  const { name, age, salary } = req.body;

  const employee = await prisma.employee.update({
    where: { id: Number(req.params.id) },
    data: { name, age: Number(age), salary: Number(salary) },
  });

  res.json(employee);
});

// Delete employee
app.delete("/employees/:id", async (req, res) => {
  await prisma.employee.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

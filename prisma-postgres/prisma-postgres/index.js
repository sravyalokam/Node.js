import express from "express";
import prisma from "./prismaClient.js";

const app = express();
app.use(express.json());

// Get all employees
app.get("/employees", async (req, res) => {
  const employees = await prisma.emp.findMany();
  res.json(employees);
});

// Get employee by ID
app.get("/employees/:id", async (req, res) => {
  const employee = await prisma.emp.findUnique({
    where: { empid: Number(req.params.id) },
  });
  res.json(employee);
});

app.listen(3000, () => console.log("Server running on port 3000"));

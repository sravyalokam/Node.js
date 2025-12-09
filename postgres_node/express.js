const express = require("express");
const prisma = require("./prisma");

const app = express();
app.use(express.json());

// GET all users
app.get("/users", async (req, res) => {
  const users = await prisma.users.findMany(); // Note: 'users', not 'user'
  res.json(users);
});

// CREATE user
app.post("/users", async (req, res) => {
  const user = await prisma.users.create({
    data: req.body,
  });
  res.json(user);
});

// GET all employees
app.get("/emps", async (req, res) => {
  const emps = await prisma.emp.findMany();
  res.json(emps);
});

// CREATE employee
app.post("/emps", async (req, res) => {
  const emp = await prisma.emp.create({
    data: req.body,
  });
  res.json(emp);
});

app.listen(3000, () => console.log("Server running on port 3000"));

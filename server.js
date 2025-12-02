const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.redirect("/api/users");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

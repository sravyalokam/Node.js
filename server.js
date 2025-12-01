// const express = require("express");
// const userRoutes = require("./routes/userRoutes");

import express, { response } from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Home page");
// })
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

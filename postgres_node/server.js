const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());


app.get("/employees", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM emp");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/employees/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM emp WHERE empid = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.listen(3000, () => console.log("Server running on port 3000"));

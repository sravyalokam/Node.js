const express = require("express");

const app = express();
app.use(express.json());  

const users = [
  { id: 1, name: "Alice", age: 25, city: "Hyderabad", skills: ["Node.js"] },
  { id: 2, name: "Bob", age: 32, city: "Bangalore", skills: ["React"] },
  { id: 3, name: "Charlie", age: 28, city: "Hyderabad", skills: ["Node.js", "React"] }
];

// POST-based search
app.post("/users/filter", (req, res) => {
  const { age, city, skills } = req.body;

  let result = users;

  // Filter by age range
  if (age) {
    result = result.filter(
      (u) => u.age >= age.min && u.age <= age.max
    );
  }

  // Filter by city
  if (city) {
    result = result.filter((u) => u.city === city);
  }

  // Filter by skills
  if (skills) {
    result = result.filter((u) =>
      skills.every((skill) => u.skills.includes(skill))
    );
  }

  res.json(result);
});

app.listen(3000, () => console.log("Server running on 3000"));

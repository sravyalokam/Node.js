const express = require("express");
const axios = require("axios");
const app = express();

app.get("/combined", async (req, res) => {
  try {
    console.log("Calling real APIs...");

    const userId = 1;

    const [userRes, postsRes] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ]);

    const finalOutput = {
      user: userRes.data,
      posts: postsRes.data,
    };

    res.json(finalOutput);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));



import express from "express";
import Queue from "bull";

const app = express();
app.use(express.json());

const jobQueue = new Queue("longTask");

app.post("/process", async (req, res) => {
  const { userId } = req.body;

  // step 1: validate
  if (!userId) return res.status(400).send("Invalid");

  // step 2: push to queue (async but FAST)
  await jobQueue.add({ userId });

  // step 3: respond immediately
  res.send("Task received ✔️");
});

app.listen(3000);

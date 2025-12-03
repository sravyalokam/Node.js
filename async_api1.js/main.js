import express from "express";
import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/submit", (req, res) => {

  res.send("Task accepted, processing...");

  const worker = new Worker(path.join(__dirname, "heavy_task.js"), {
    workerData: 1e9
  });

  worker.on("message", (result) => {
    console.log("Worker result:", result);
  });

  worker.on("error", (err) => {
    console.error("Worker error:", err);
  });

  worker.on("exit", (code) => {
    console.log("Worker exited with code", code);
  });

});

app.listen(3000, () => console.log("Server running on 3000"));

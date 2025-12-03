import express from "express";
const app = express();

function heavyWork() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  return sum;
}


app.get("/block", (req, res) => {
  console.log("Heavy work started");
  
  console.log("Heavy work finished");
  res.send("Done");
});


app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => console.log("Running"));

import Queue from "bull";

const jobQueue = new Queue("longTask");

jobQueue.process(async (job) => {
  console.log("Long task started:", job.data);

  // Simulate long work (API calls, DB ops, ML jobs)
  await new Promise(res => setTimeout(res, 5000));

  console.log("Long task finished");
});

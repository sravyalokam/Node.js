import { parentPort, workerData } from "worker_threads";

function heavyWork(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}


const result = heavyWork(workerData);
parentPort.postMessage(result);

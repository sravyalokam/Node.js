import { parentPort, workerData } from 'worker_threads';

function heavyWork() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i; // CPU-heavy
  return sum;
}

parentPort.postMessage(heavyWork(workerData));

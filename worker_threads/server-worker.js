import express from 'express';
import { Worker } from 'worker_threads';

const app = express();

function runWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: null });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

app.get('/non-block', async (req, res) => {
  const result = await runWorker(); // runs in worker thread
  res.send({ result });
});

app.get('/ping', (req, res) => res.send('pong'));

app.listen(3001, () => console.log('Worker server running'));

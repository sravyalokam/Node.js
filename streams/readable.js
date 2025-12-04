// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const inputFilePath = path.join(__dirname, "input.txt");

// const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });

// readStream.on("data", (chunk) => {
//   console.log("Received a chunk of data : ", chunk);
// });

// readStream.on("end", () => {
//   console.log("Finished reading the file");
// });

// readStream.on("error", (err) => {
//   console.log("An error occurred : ", err.message);
// });



import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

const readStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });

const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Data has been written");
});
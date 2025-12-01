const fs = require("fs");
const path = require("path");

// Read the directory files
fs.readdir("C:/Users/Sravya Lokam/OneDrive - COGNINE/Desktop/JavaScript/Javascript docs", (err, files) => {
  if (err) return console.log("ERROR:", err);
  console.log("Files inside folder:", files);
});

// Read file
fs.readFile(
  filePath1, "utf-8",
  (err, data) => {
    if (err) return console.log(err);
    console.log("File read successfully!");
    console.log(data);
  }
);

// fs.readFile("C:/Users/Sravya Lokam/OneDrive - COGNINE/Desktop/files/file test.rtf", "utf8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });


fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});


// Write file
fs.writeFile("hello1.txt", "New content", {flag:"a"},(err) => {
  if (err) console.log(err);
});

// Append File
fs.appendFile("hello1111.txt", "More text\n", (err) => {});

// Delete file
fs.unlink("hello.txt", (err) => {});

// create new directory
fs.mkdir("newFolder1", (err) => {});

// Delete directory
fs.rmdir("newFolder111", (err) => {});

// read directory files
fs.readdir(".", (err, files) => {
  console.log(files);
});

// Watch file
fs.watch("test.txt", () => {
  console.log("File changed!");
});

// Current Directory file path
const filePath = path.join(
  __dirname,
  "hello.txt"
)
console.log(filePath);

// file path
const filePath1 = path.join(
  "C:", 
  "Users", 
  "Sravya Lokam", 
  "OneDrive - COGNINE", 
  "Desktop", 
  "JavaScript", 
  "Javascript docs", 
  "Variables & Data Types.docx"
);


// Information about file or directory
fs.stat("C:/Users/Sravya Lokam/OneDrive - COGNINE/Desktop/JavaScript/Javascript docs", (err, stats) => {
 if (err) return console.log("ERROR:", err);
  console.log("Is file?", stats.isFile());       
  console.log("Is directory?", stats.isDirectory()); 
  console.log("Size:", stats.size);             
  console.log("Created at:", stats.birthtime);
  console.log("Modified at:", stats.mtime);
});
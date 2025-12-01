// console.log("Hello Node.js");

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end("Hello from Node.js server");
// })

// server.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end("Home page");
//     } else if ( req.url === '/about') {
//         res.end("About page");
//     } else {
//         res.writeHead(404);
//         res.end("Not Found");
//     }
// })

// server.listen(3000);


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
       res.setHeader("Content-Type", "application/json");
       res.end(JSON.stringify({ message: "Home Page" }));
    } else if ( req.url === '/about') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "About us page" }));
    } else if( req.url === '/contact') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Contact us page" }));
    } else {
        res.writeHead(404);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Not Found" }));
    }
})

server.listen(3000);
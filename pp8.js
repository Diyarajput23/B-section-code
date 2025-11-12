const http = require("http");

http.createServer(function (req, res) {
  res.write("Hello! This is my first Node.js server");
  res.end();
}).listen(3000);

console.log("Server is running at http://localhost:3000");

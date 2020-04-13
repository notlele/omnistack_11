const express = require("express");
const server = express();

server.use(express.static("public"));

// // criando uma rota
// server.get("/", function (req, res) {
//   return res.sendFile("/index.html");
// });

server.listen(3000);

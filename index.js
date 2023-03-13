const express = require("express");
const server = express();

server.get("/시간표", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});

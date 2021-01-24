const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});
const port = 0;
let users = 0;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

io.on("connection", (socket) => {
  console.log(`user ${users} connected`);
  users++;
  socket.on("next", (msg) => {
    console.log(msg);
    io.emit("next", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client has disconnected");
    users--;
  });
});

server.listen(process.env.PORT || port);

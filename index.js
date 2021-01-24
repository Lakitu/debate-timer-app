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

io.sockets.on("connection", (socket) => {
  users++;

  socket.on("room", (room) => {
    socket.join(room);
  })

  socket.on("next", (msg) => {
    // console.log(`NEXT: ${msg.newSpeech}, ROOM: ${msg.room}`);
    // io.sockets.in(msg.room).emit('next', msg);
    io.sockets.emit("next", msg)
  });

  socket.on("disconnect", () => {
    users--;
  });
});

server.listen(process.env.PORT || port);

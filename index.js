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
import {api} from "/api"
const port = 0;
let users = 0;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api/:request", (req, res) => {
  res.send(api(request));
})

io.sockets.on("connection", (socket) => {
  users++;

  socket.on("room", (room) => {
    socket.join(room);
  });

  socket.on("request end time", (msg) => {
    io.sockets.in(msg.room).emit('new connection', '')
  });

  socket.on("end time", (msg) => {
    io.sockets.in(msg.room).emit("end time", msg.endTime);
  });

  socket.on("next", (msg) => {
    io.sockets.in(msg.room).emit('next', msg);
  });
});

server.listen(process.env.PORT || port);

const express = require("express");
const app = express();
// const cors = require('cors')
// app.use(cors);
const http = require("http");
const server = http.Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});
const port = 0; // works on localhost
let users = 0;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.static(__dirname + '/pages'))
app.get("/formats", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendFile(__dirname + "/pages/formats.json");
})
app.get("/times/:format", (req, res) => {
  res.sendFile(__dirname + `/pages/times/${req.params.format}.json`)
})
// app.use((req, res) => {
//   res.status(404).send({url: req.originalURL+' not found'});
// }) // 404 response

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

server.listen((process.env.PORT || port));

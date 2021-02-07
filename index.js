// importing all requirements
  const express = require("express");
  const app = express();
  const cors = require('cors')
  app.use(cors());
  const http = require("http");
  // noinspection JSValidateTypes
const server = http.Server(app);
  // noinspection JSValidateTypes
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });

const port = 3001; // works on localhost
let users = 0;

const createRoom = () => {
  return Math.random().toString(36).substr(2, 9);
}

// API requests
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  app.get("/favicon.ico", (req, res) => {
    res.sendFile(__dirname+"/timer.png");
  })
  app.use(express.static(__dirname + '/pages'))

  app.get("/formats", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.sendFile(__dirname + "/pages/formats.json");
  })
  app.get("/times/:format", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.sendFile(__dirname + `/pages/times/${req.params.format}.json`)
  })

io.sockets.on("connection", (socket) => {
  users++;

  socket.on("room", (room) => { // joining a room
    socket.join(room);
  }); // joining a room

  socket.on("create room", () => {
    socket.host = true;
    socket.roomCode = createRoom();
    socket.emit("new room code", socket.roomCode);
  }) // create room

  socket.on("request end time", (msg) => {
    //noinspection JSUnresolvedVariable
    io.sockets.in(msg.room).emit('new connection', '')
  });

  socket.on("disconnected", () => {
    if (socket.host) {
      io.sockets.in(socket.roomCode).emit('host left', null)
    }
  })

  socket.on("end time", (msg) => {
    //noinspection JSUnresolvedVariable
    io.sockets.in(msg.room).emit("end time", msg.endTime);
  });

  socket.on("next", (msg) => {
    //noinspection JSUnresolvedVariable
    io.sockets.in(msg.room).emit('next', msg);
  });
});

server.listen((process.env.PORT || port));

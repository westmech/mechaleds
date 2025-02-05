const express  = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors')
const domeRoutes = require('./domeRoutes')
const prairiesRoutes = require('./prairiesRoutes')

const app = express()
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend's origin
    methods: ["GET", "POST"], // Allowed methods
    credentials: true, // Allow credentials (cookies, headers, etc.)
  },
});

// Middleware for handling CORS with Express
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend's origin
    methods: ["GET", "POST"],
    credentials: true, // Allow credentials
  })
);

const port = 3000

const baseUrl = "http://localhost:" + port.toString()

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.use(express.json())

app.use('/dome', domeRoutes(io, baseUrl));
app.use('/prairies', prairiesRoutes(io, baseUrl));


app.use('/gifs', express.static('public'))
app.use('/pngs', express.static('public'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
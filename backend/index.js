const express  = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors')

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

app.get('/dome', (req, res) => {
  res.sendFile(join(__dirname, 'dome.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.use(express.json())

app.post('/rockies', (req, res) => {
   io.emit("dome", "http://localhost:3000/gifs/rockies.gif");
   console.log('emitting rockies')
   res.end()
})

app.post('/prairies', (req, res) => {
   io.emit("dome", "http://localhost:3000/gifs/prairies.gif");
  console.log('emitting prairies')
   res.end()
})

app.use('/gifs', express.static('public'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express  = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');


const app = express()
const server = createServer(app);
const io = new Server(server);

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
   io.emit("led", "http://localhost:3000/gifs/rockies.gif");
   console.log('emitting rockies')
   res.end()
})

app.post('/prairies', (req, res) => {
   io.emit("led", "http://localhost:3000/gifs/prairies.gif");
  console.log('emitting prairies')
   res.end()
})

app.use('/gifs', express.static('public'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
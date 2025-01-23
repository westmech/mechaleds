
const express  = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');


const app = express()
const server = createServer(app);
const io = new Server(server);

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get("/prairies", (req, res) =>{
    io.emit("led", "http://localhost:3000/gifs/prairies.gif");
    res.send("sent prairies to led");
})

app.get("/rockies", (req, res) => {
    io.emit("led", "http://localhost:3000/gifs/rockies.gif");
    res.send("sent rockies to led");
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.post('/rockies', (req, res) => {
  console.log("req", req.body)
  res.send('Hello World!')
})

app.use('/gifs', express.static('public'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
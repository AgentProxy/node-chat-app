const path = require('path');
const publicPath = path.join(__dirname,'../public');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', (socket) => {
        console.log('Client disconnected');
    });
    socket.on('createMessage', (message) => {
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
        console.log(message);
    });
});

server.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});

console.log(__dirname + '/../public');
console.log(publicPath);
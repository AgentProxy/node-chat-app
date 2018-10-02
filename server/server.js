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
const {generateMessage, generateLocationMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', (socket) => {
        console.log('Client disconnected');
    });

    socket.emit('join',{
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined'));

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage',message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });
});

server.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});

console.log(__dirname + '/../public');
console.log(publicPath);
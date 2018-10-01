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
    // socket.emit('newEmail', {
    //     from: 'ther@example.com',
    //     text: 'Hey, What is going on.',
    //     createdAt: 123
    // });
    socket.on('disconnect', (socket) => {
        console.log('Client disconnected');
    });
    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });
    socket.emit('newMessage', {
        from: 'EJFlow32',
        text: 'WADDUPPPP',
        createdAt: new Date().toString()
    });
    socket.on('createMessage', (message) => {
        console.log(message);
    });
    //newMessage Event
    //from, text, createdAt
    //create message on
});

server.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});

console.log(__dirname + '/../public');
console.log(publicPath);
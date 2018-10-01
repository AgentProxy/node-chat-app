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

    socket.emit('join',{
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newUser',{
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });



    socket.on('createMessage', (message) => {
        console.log('createMessage',message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });
});

server.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});

console.log(__dirname + '/../public');
console.log(publicPath);
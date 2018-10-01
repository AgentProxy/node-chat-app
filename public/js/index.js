var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    socket.on('newMessage', function (message){
        console.log(message);
    });
    socket.emit('createMessage', {
        from: 'Thereeeesseeee',
        text: "Hi!"
    });
    socket.on('join', function(message){
        console.log(message);
    });
    socket.on('newUser', function(message) {
        console.log(message);
    });
});
socket.on('disconnect', function (){
    console.log('Disconnected from server');
});

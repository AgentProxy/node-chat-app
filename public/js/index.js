var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    // socket.emit('createEmail', {
    //     to: "ther@example.com",
    //     text: "Hey, this is Eric",
    // });
    socket.on('newMessage', function (message){
        console.log(message);
    });
    socket.emit('createMessage', {
        from: 'Thereeeesseeee',
        text: "Hi!"
    });
    //createMessage Event
    //from, text
});
socket.on('disconnect', function (){
    console.log('Disconnected from server');
});
// socket.on('newEmail', function(email){
//     console.log('New email: ', email);
// });

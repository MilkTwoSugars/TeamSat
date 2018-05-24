var socket = io()

socket.emit('connect', "User connected");

socket.on('connect', function (msg) {
    console.log(msg)
});

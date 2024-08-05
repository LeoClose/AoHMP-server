var app = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
      console.log("My public IP address is: " + ip);
    });
});

server.listen(8000, function(){
    console.log("[Server] Running");
});

io.on('connection', function(socket){
    console.log("[Player] Connected")
    socket.on('disconnect', function(){
        console.log("[Player] Disconnected");
    });
});
var net = require('net');
var OnkyoPort = 60128;
var OnkyoIp = '192.168.178.25';

//create new client and bind to socket
var client = new net.Socket();

//connect the client
client.connect(OnkyoPort, OnkyoIp, function(){
    console.log('connected');
})

//fires when data is recived
client.on('data', function(data) {
	console.log('Received: ' + data);
    //close connection
    client.destroy;
});


client.on('close', function() {
	console.log('Connection closed');
});
const WebSocket = require('ws');  const ws1 = new WebSocket.Server({ port:8000});   ws1.on('connection', function connection(wsocket,req) {  console.log('client connected');  wsocket.send("hello client");   wsocket.on('message',function(msg){console.log("client msg=="+msg);});  wsocket.on('close',function(){console.log("client closed");wsocket.destroy;});  });
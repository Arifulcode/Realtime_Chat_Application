const express =require('express');
const app = express();
const http = require('http');
const expressServer=http.createServer(app);




const {server}=require('socket.io');
let io= new server(expressServer);






app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html")
});

io.on('connection', function(socket){
    socket.on('chat',function(Msg){
        //server to client data send below 1 line code
        io.emit('chatTransfer',Msg)
    })
})


expressServer.listen = (5000, function(){
    console.log("3000 port express server is running")
})
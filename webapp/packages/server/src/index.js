const express = require('express');
const socketio = require('socket.io')
const cors = require('cors')

const app = express();


const server = app.listen(3001);
app.use(cors());

app.get("/", (req, res)=>{
    res.send({hello: "world"})
})

io = socketio(server);

io.on("connect", (socket)=> {
    console.log("Se conecto")
    setInterval(() => {
        console.log("sending event")
        socket.emit("prueba", {hello: "byby world"}, function(res){
            console.log("ack", res);
        });
    }, 1000)
})
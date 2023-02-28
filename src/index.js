import app from "./app";
import "./database";
import http from "http";
import socketio from "socket.io";
import sockets from "./sockets";
app.post('/upload',(req,res) => {
    let EDFile = req.files.file
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
})



const server = http.createServer(app)
const io = socketio(server);
sockets(io);



server.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);




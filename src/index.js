const path = require('path')
const http = require('http')
const express = require('express');
const app = express();
const socketio = require('socket.io');

// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0;

io.on('connect', (socket)=>{
    console.log('new web socketio connection')
    socket.emit('countUpdate', count)

socket.on('bt', ()=>{
    count++
    io.emit('countUpdate', count)
})

})

module.exports = server.listen(port, () => {
  console.log('Serve is running in port 3000.');
});
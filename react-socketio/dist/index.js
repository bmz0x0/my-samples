const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cron = require('node-cron');
const stats = require('cpu-stats');

app.use(express.static('./dist'));

http.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  console.log('a user connected.');
  socket.on('disconnect', () => {
    console.log('a user disconnected.');
  });
});

cron.schedule('*/3 * * * * *', () => {
  console.log('excute cron task.');
  stats(100, (error, result) => {
    io.emit('message', result[0].cpu);
  });
});

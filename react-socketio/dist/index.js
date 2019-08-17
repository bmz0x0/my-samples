const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static('./dist'));

http.listen(3000, () => {
  console.log('listening on *:3000');
});

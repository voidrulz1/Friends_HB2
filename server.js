const express = require('express');
const server = express();
require('dotenv').config();


var port = process.env.EXPRESS_PORT;

server.all('/', (req, res) => {
  res.send('<h2>Server is ready!</h2>');
});


module.exports = () => {
  server.listen(port, () => {
    console.log('Server Ready.');
  });
  return true;
}


function loginHangbots() {
  const Hangbot = require('./hangbot.js')
}

loginHangbots();

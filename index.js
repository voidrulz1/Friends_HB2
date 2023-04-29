require('dotenv').config();
//const Monitor = require('ping-monitor')
const keepAlive = require('./server');
keepAlive();


// const myMonitor = new Monitor({
//   website: process.env.PING_TARGET,
//   title: process.env.PING_TARGET,
//   interval: 2
// });



// myMonitor.on('up', function (res, state) {
//     console.log('Yay!! ' + state.address + ' is up.');
// });
// myMonitor.on('down', function (res, state) {
//   console.log('Oh Snap!! ' + state.address + ' is down! ' + state.statusMessage);
// });
// myMonitor.on('restored', function (res, state) {
//   console.log(state.address + ' has been restore');
// });
// myMonitor.on('stop', function (res, state) {
//   console.log(state.address + ' monitor has stopped.');
// });
// myMonitor.on('timeout', function (error, res) {
//   console.log(error);
// });
// myMonitor.on('error', function (error) {
//   console.log(error);
// });

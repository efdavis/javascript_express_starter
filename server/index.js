const express = require('express');
const app = express();
const path = require('path');

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(path.join(__dirname, '/../public')));


app.listen(3005, function () {
  console.log('listening on port 3005!');
});


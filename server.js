var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(9999);
console.log('listening on 9999');
const express = require('express');
var app = express();

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/app/index.html');
});

app.use((req, res, next) => {
	res.send('Sorry, page not found.');
});

console.log('Server started');

app.listen(3000);

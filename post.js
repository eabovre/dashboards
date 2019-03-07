
var json = require('./data.json');
var js = console.log(json)

const express = require('express');
const app = express()

const http = require('http');
const HOST = 'localhost';
const PORT = 5001;


app.get('/', (req, res) => {
  res.send(json);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

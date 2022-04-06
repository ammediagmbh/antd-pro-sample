'use strict';

const express = require('express');

const path = require('path');

// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

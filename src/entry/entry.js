'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const app = express();
const scale = require('../scale')

// logging middleware
var morgan = require('morgan')
app.use(morgan('combined'))

// Routes
app.all('/echo/*', (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});

app.use('/sharp', scale())

// Error handler
app.use((err, req, res, next) => {
  res.status(500).send('Internal Serverless Error: ' + err);
});

module.exports = app;

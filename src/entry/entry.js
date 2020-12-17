'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');

const app = express();

// logging middleware
var morgan = require('morgan')
app.use(morgan('combined'))

// Routes
app.all('/*', (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});

// Error handler
app.use((err, req, res) => {
  res.status(500).send('Internal Serverless Error: ' + err);
});

module.exports = app;

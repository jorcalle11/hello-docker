'use strict';

const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  const hostname = os.hostname();
  const homedir = os.homedir();
  res.send({ hostname, homedir });
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});

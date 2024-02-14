const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from your workout journal app!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

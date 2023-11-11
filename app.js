// app.js
const express = require('express');
const accountsModule = require('./accountsModule');

const app = express();
const port = 3001;

app.get('/account/addresses', (req, res) => {
  const addresses = accountsModule.getAddresses();
  res.json({ addresses });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

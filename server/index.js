const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const axios = require('axios');

app.use(cors({ origin: '*' }));

app.get('/', async (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
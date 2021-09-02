const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const getFruitsAndPhotos = require('./controller');

app.use(cors({ origin: '*' }));

app.get('/data', (req, res) => {
  getFruitsAndPhotos(req, res);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
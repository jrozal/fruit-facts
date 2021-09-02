const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const getFruitsAndPhotos = require('./controller');

app.use(cors({ origin: '*' }));

const publicPath = path.join(__dirname, '..', '/client/build');

app.use(express.static(publicPath));

app.get('/data', (req, res) => {
  getFruitsAndPhotos(req, res);
});

// send to homepage for non-existant resource
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
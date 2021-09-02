const photos = require('../api/photos');
const getFruit = require('../api/fruityVice');

const getFruitsAndPhotos = async (req, res) => {
  try {
    const fruit = Object.keys(photos);
    const requestUrls = fruit.map((name) => getFruit(name));
    const responses = await Promise.all(requestUrls);

    let data = [];

    for (const res of responses) {
      // if Fruityvice API reponse error, throw error
      if (res === null) {
        const error = new Error('API Server Error');
        error.status = 503;
        throw error;
      }

      // else build response data with photos
      else {
        let name = res.name.toLowerCase();
        if (photos[name]) {
          data.push({ photo: photos[name], ...res })
        }
      }
    }

    res.status(200).send(data);
  }

  catch (error) {
    res.status(error.status || 500).send(error)
  }
};

module.exports = getFruitsAndPhotos;
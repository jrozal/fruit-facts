const photos = require('../api/photos');
const { getFruit, getAllFruit} = require('../api/fruityVice');

const getFruitsAndPhotos = async (req, res) => {
  try {
    const fruit = Object.keys(photos);
    const responses = await getAllFruit();

    let data = [];

    for (const res of responses) {
      // if Fruityvice API reponse error, throw error
      if (res === null) {
        const error = new Error('API Server Error');
        error.status = 503;
        throw error;
      }

      // else build response data with photos
      let name = res.name.toLowerCase();
      if (photos[name]) {
        data.push({ photo: photos[name], ...res })
      } else {
        data.push({ photo: 'no photo available', ...res })
      }
    }

    res.status(200).send(data);
  }

  catch (error) {
    res.status(error.status || 500).send(error)
  }
};

module.exports = getFruitsAndPhotos;
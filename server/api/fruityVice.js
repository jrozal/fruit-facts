const axios = require('axios');

const getAllFruit = async () => {
  try {
    const response = await axios.get('https://www.fruityvice.com/api/fruit/all');
    return response.data
  } catch (error) {
    return error;
  }
};

const getFruit = async (name) => {
  try {
    const response = await axios.get(`https://www.fruityvice.com/api/fruit/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllFruit,
  getFruit
};
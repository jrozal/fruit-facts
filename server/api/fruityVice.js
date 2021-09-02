const axios = require('axios');

const getFruit = async (name) => {
  try {
    const response = await axios.get(`https://www.fruityvice.com/api/fruit/${name}`);
    return response.data;
  } catch (error) {
    console.error('Fruityvice API Error:', error);
    return null;
  }
};

module.exports = getFruit;
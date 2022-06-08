const axios = require('axios');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

module.exports = async function getApiData(urlPath) {
  var result;
  try {
    let res = await axios.get(new URL(urlPath, `https://api.scripture.api.bible/`).href, {
      headers: { 'api-key': process.env.API_KEY}
  }).then(res => result=res.data.data);

    return result;

  } catch (error) {
    console.log(error)
  }
};


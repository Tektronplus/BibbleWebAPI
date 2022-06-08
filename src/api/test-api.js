
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlProva = new URL(`https://api.scripture.api.bible/`, 'v1/bibles');

console.log(urlProva)
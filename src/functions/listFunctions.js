const { rejectSeries } = require('async');
const getApiData = require('../api/api-call');


module.exports = {

    biblesList: async function bibleList(urlPath) {
        let arrayInfo = [];
        await getApiData(urlPath).then(res => res.map(bibleInfo => arrayInfo.push({ "value": `${bibleInfo.id}`, "label": `${bibleInfo.name}` })));
        return arrayInfo;
    },

    booksList: async function bookList(urlPath) {
        let arrayInfo = [];
        await getApiData(urlPath).then(res => res.map(bookInfo => arrayInfo.push({ "id": `${bookInfo.id}`, "bibleId": `${bookInfo.bibleId}`, "name": `${bookInfo.name}`})));
        return arrayInfo;
    },
    chaptersList: async function chapterList(urlPath) {
        let arrayInfo = [];
        await getApiData(urlPath).then(res => res.map(chapterInfo => arrayInfo.push({ "id": `${chapterInfo.id}`, "bibleId": `${chapterInfo.bibleId}`, "number": `${chapterInfo.number}`})));
        return arrayInfo;
    }
}
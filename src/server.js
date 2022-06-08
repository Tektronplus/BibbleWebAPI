//Dependeces
const express = require("express");
const cors = require('cors');
const app = express();

//Components
const getApiData = require('./api/api-call');
const listFunc = require('./functions/listFunctions');



//Express
app.use(cors());


app.get("/",(req, res) => {
    res.send("Welcome to BibleAPI Routing")
});

//Bibles
app.get("/bibles",async (req, res) => {
    res.send(await listFunc.biblesList('v1/bibles'))
});

app.get("/bibles/:idBible",async (req, res) => {
    res.send(await getApiData('v1/bibles/'+ req.params.idBible))
});

//Books
app.get("/bibles/:idBible/books",async (req, res) => {
    res.send(await listFunc.booksList('v1/bibles/'+ req.params.idBible +'/books'))
});

app.get("/bibles/:idBible/books/:idBook",async (req, res) => {
    res.send(await getApiData('v1/bibles/'+ req.params.idBible +'/books/'+ req.params.idBook))
});

//Chapters
app.get("/bibles/:idBible/books/:idBook/chapters",async (req, res) => {
    res.send(await listFunc.chaptersList('v1/bibles/'+ req.params.idBible +'/books/'+ req.params.idBook +'/chapters'))
});

app.get("/bibles/:idBible/chapters/:idChapter",async (req, res) => {
    res.send(await getApiData('v1/bibles/'+ req.params.idBible +'/chapters/'+ req.params.idChapter))
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Bible.API server started on port ${PORT}`));


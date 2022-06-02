const controller = require('./controller');
const Express = require('express')
const {request, response} = require("express");
const mongoClient = require('mongodb').MongoClient;

const server = new Express();
const client = new mongoClient("mongodb://localhost:27017/");

let database;
let userCollection;
const PORT = 8080;

const parser = Express.json();

client.connect(function(err, base){
    if(err) {
        return console.log(err);
    }

    database = base;
    userCollection = database.db('viewerDB').collection('userCollection');

    server.listen(PORT, function(){
        console.log(`Сервер запущен на ${PORT} порту...`);
    });
});

server.post('/registration', parser, (request, response) => {
    controller.registration(request, response, userCollection);
});

server.post('/authentication', parser, (request, response) => {
    controller.authentication(request, response, userCollection);
});

process.on("SIGINT", () => {
    database.close();
    process.exit();
});
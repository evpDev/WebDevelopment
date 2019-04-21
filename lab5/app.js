/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
var uc = require("./userconn");
// var expressVue = require("express-vue");
   
const app = express();
const jsonParser = express.json();
// const expressVueMiddleware = expressVue.init();
// app.use(expressVueMiddleware);
 
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const localmongo = "mongodb://localhost:27017/";
const remotemongo = `mongodb+srv://${uc.user}:${uc.password}@lab5db-plygi.mongodb.net/test?retryWrites=true`
const mongoClient = new MongoClient(localmongo, {useNewUrlParser: true}
);
 
let dbClient;
 
app.use(express.static(__dirname + "/public"));
 
mongoClient.connect(function(err, client){
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("test").collection("drafts");
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/drafts", function(req, res) {
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, drafts){
        if (err) return console.log(err);
        // console.log(drafts);
        res.send(drafts);
        // res.render('index', drafts);
        /*var data = {
            otherData: 'Something Else' 
        };
        req.vueOptions = {
            el: '#app',
            data: {
                message: 'Hello Vue.js!'
            }
        };
        res.renderVue('main.vue', data, req.vueOptions);*/
    }); 
});

app.post("/markdown", jsonParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
       
    const text = req.body.text;

    console.log(text);
    res.send(null);
});
   
app.post("/", jsonParser, function (req, res) {
       
    if(!req.body) return res.sendStatus(400);
       
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {name: userName, age: userAge};
       
    
});
    
app.delete("/", jsonParser, function(req, res){
    const id = new objectId(req.body.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){
        if (err) return console.log(err);    
        // let user = result.value;
        res.send("Draft has been deleted");
    });
});
   
app.put("/", jsonParser, function(req, res){
        
    if(!req.body) return res.sendStatus(400);
    
    const title = req.body.title;
    const markup = req.body.markup;
    var id = req.body.id;
    const collection = req.app.locals.collection;

    if (id) {
        var id = new objectId(id);
        collection.findOneAndUpdate({_id: id}, { $set: {title: title, markup: markup}}, function(err, result) {
            if (err) return console.log(err);
            // let user = result.value;
            res.send("Markup has been modeified");
        });
    } else {
        collection.insertOne({title: title, markup: markup}, function(err, result){
            if(err) return console.log(err);
            res.send("Markup has been added");
        });
    }
});
 
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
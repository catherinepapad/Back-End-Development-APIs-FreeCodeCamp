let express = require('express');
let app = express();
require('dotenv').config();                 // Task 6
let bodyParser = require('body-parser');    // Task 11


// Task 7
app.use("/", (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});



// Task 11
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Task 1
console.log("Hello World");


// Task 2
// app.get("/",function(GET, res){
//     res.send('Hello Express');
// });


//Task 4
app.use("/public",express.static(__dirname + "/public"));


// Task 3
app.get("/",function(GET, res){
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});


// Task 5
// app.get("/json", function(GET, res){
//     res.json({"message": "Hello json"});
// });


// Task 6
app.get("/json", function(GET, res){
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
});



// Task 8
app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json({"time": req.time});
});


// Task 9
app.get("/:word/echo", (req, res) => {
    let word = req.params.word;
    res.json({"echo": word});
});


// Task 10
app.get("/name", (req, res) => {
    let name = req.query.first + " " + req.query.last;
    res.json({"name": name});
});






 module.exports = app;

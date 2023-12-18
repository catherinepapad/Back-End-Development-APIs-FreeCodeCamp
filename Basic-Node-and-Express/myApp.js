let express = require('express');
let app = express();
require('dotenv').config();   // Task 6


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
    if (process.env.MESSAGE_STYLE==="uppercase"){
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
});




































 module.exports = app;

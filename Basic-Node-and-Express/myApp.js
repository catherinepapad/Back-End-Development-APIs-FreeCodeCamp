let express = require('express');
let app = express();

console.log("Hello World");


app.get("/",function(GET, res){
    res.send('Hello Express');
});


































 module.exports = app;

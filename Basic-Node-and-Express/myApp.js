let express = require('express');
let app = express();


// Task 1
console.log("Hello World");


// Task 2
// app.get("/",function(GET, res){
//     res.send('Hello Express');
// });


//Task 4
app.use("/public",express.static(__dirname));



// Task3
app.get("/",function(GET, res){
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});




































 module.exports = app;

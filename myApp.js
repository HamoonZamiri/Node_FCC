var express = require('express');
var app = express();


module.exports = app;
console.log("hello world");
app.get("/", (req, res) => {
    //res.send("Hello Express")
    res.sendFile(__dirname + "public/index.html")
});
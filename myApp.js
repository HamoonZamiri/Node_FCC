require('dotenv').config();
var express = require('express');
var app = express();
const bodyParser = require("body-parser");

const path = __dirname + "/public";

module.exports = app;

//middleware example
app.use( [(req, res, next) => {
    //console.log(req.method + " " + req.path + " - " + req.ip)
    next();
}, bodyParser.urlencoded({extended: false})])

app.use("/public", express.static(path));
//get resource at /json
app.get("/json", (req, res) => {
    const obj = {"message": "Hello json"}
    if(process.env.MESSAGE_STYLE == "uppercase"){
        obj.message = "HELLO JSON";
        res.json(obj)
    }
    else {
        res.json(obj);
    }


});


// home page setup
app.get("/", (req, res) => {
    //res.send("Hello Express")
    res.sendFile(__dirname + "/views/index.html")
});


app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next()
},
(req, res) => {
    res.json({time: req.time});
});

app.get("/:word/echo", (req, res) => {
    const {word} = req.params
    console.log(req.params)
    res.json({echo: word})

});

app.get("/name", (req, res) => {
    const {first, last} = req.body
    res.json({name: `${first} ${last}`});


})

app.post("/name", (req, res) => {
    const {first, last} = req.body
    res.json({name: `${first} ${last}`});
})
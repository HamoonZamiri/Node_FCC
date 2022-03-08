var express = require('express');
var app = express();
const path = __dirname + "/public";

module.exports = app;
app.get("/json", (req, res) => {
  const obj = {"message": "Hello json"}
  res.json(obj)
})
app.get("/", (req, res) => {
    //res.send("Hello Express")
    res.sendFile(__dirname + "/views/index.html")
});
app.use("/public", express.static(path));
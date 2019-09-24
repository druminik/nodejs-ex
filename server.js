var express = require("express");
var app = express();
var port = 8080;

app.get("/", (req, res, next) => {
    console.log("requested URL /");
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen(port, () => {
 console.log("Server running on port %s",port);
});

var express = require("express");
var user = require("./user");
app = express();

app.use("/user", user);

module.exports = app;

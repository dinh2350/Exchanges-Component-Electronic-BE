var express = require("express");
var user = require("./user");
var auth = require("./auth");
app = express();
app.use("/user", user);
app.use(auth);

module.exports = app;

var express = require("express");
var user = require("./user");
var auth = require("./auth");
var post = require("./post");
app = express();
app.use("/user", user);
app.use(auth);
app.use("/post", post);

module.exports = app;

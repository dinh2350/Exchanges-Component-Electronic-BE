var express = require("express");
var { register, login } = require("../controllers/auth");
app = express();
app.post("/register", register);
app.post("/login", login);
module.exports = app;

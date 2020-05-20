var express = require("express");
var { create, getAll } = require("../controllers/user");
app = express();

app.post("/", create);
app.get("/", getAll);
module.exports = app;

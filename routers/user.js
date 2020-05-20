var express = require("express");
var { create, getAll, update } = require("../controllers/user");
app = express();

app.post("/", create);
app.get("/", getAll);
app.put("/:id", update);
module.exports = app;

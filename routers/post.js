var express = require("express");
var { create, getAll, update, deleteById } = require("../controllers/post");
app = express();

app.post("/", create);
app.get("/", getAll);
app.put("/:id", update);
app.delete("/:id", deleteById);

module.exports = app;

var express = require("express");
var { uploadImage } = require("../middlewares/upload");
var {
  create,
  getAll,
  update,
  deleteById,
  uploadAvatar,
  getUser,
} = require("../controllers/user");
app = express();

app.post("/", create);
app.get("/", getAll);
app.put("/:id", update);
app.delete("/:id", deleteById);
app.post("/:id/avatar", uploadImage("avatar"), uploadAvatar);
app.get("/:id", getUser);
module.exports = app;

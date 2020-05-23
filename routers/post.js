var express = require("express");
var {
  create,
  getAll,
  update,
  deleteById,
  uploadImages,
} = require("../controllers/post");
var { uploadManyImage } = require("../middlewares/upload");
app = express();

app.post("/", create);
app.get("/", getAll);
app.put("/:id", update);
app.delete("/:id", deleteById);
app.post("/:id/upload-imgaes", uploadManyImage("post"), uploadImages);
module.exports = app;

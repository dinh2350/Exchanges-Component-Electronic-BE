var express = require("express");
var mongoose = require("mongoose");

// init express
var app = express();
var port = 3000;
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

// init mongodb
mongoose.connect("mongodb://localhost/ece", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected mongodb");
});

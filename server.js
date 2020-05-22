var express = require("express");
var mongoose = require("mongoose");
var router = require("./routers/index");
var config = require("./config/index");
// init express
var app = express();
var port = process.env.PORT || config.port;
// var port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

// init mongodb
// var database_url = process.env.DATABASE_URL || "mongodb://localhost/ece";
mongoose.connect(config.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected mongodb");
});

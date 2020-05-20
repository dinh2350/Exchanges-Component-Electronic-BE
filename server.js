var express = require("express");
var app = express();
var port = 3000;

app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

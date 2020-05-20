var { User } = require("../models/User");
var bcrypt = require("bcryptjs");
const { promisify } = require("util"); // built-in nodejs
const jwt = require("jsonwebtoken");

module.exports.register = function (req, res) {
  var { name, yearOld, phone, address, email, password } = req.body;
  var newUser = new User({ name, yearOld, phone, address, email, password });
  newUser
    .save()
    .then((user) => res.status(200).send(user))
    .catch(function (e) {
      res.status(500).send("save err");
    });
};

/**
 * @todo login with CREDENTIALS: email + password
 */
const comparePassword = promisify(bcrypt.compare);
const jwtSign = promisify(jwt.sign);
module.exports.login = function (req, res) {
  var { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) return res.status(500).send("not found user");
    comparePassword(password, user.password)
      .then(function (isMatch) {
        if (!isMatch) return res.status(400).send("no match");
        var payload = {
          email: user.email,
          name: user.name,
        };
        return jwtSign(payload, "keys.secret_key", { expiresIn: 3600 });
      })
      .then(function (token) {
        return res.status(200).json({
          message: "Login successfully",
          token,
        });
      })
      .catch((e) => res.status(500).send(e));
  });
};

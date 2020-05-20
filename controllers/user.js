var { User } = require("../models/User");

module.exports.create = async function (req, res) {
  try {
    var { name, yearOld, phone, address, email, password } = req.body;
    var newUser = new User({ name, yearOld, phone, address, email, password });
    newUser = await newUser.save();
    if (!newUser) new throwError("err save user");
    res.status(200).send(newUser);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.getAll = async function (req, res) {
  try {
    var users = await User.find();
    if (!users) new throwError("err get list user");
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.update = function (req, res) {
  var { name, yearOld, phone, address, email, password } = req.body;
  var { id } = req.params;
  User.findById({ _id: id }, function (err, user) {
    if (err) res.status(404).send("not found user");
    user.name = name;
    user.yearOld = yearOld;
    user.phone = phone;
    user.address = address;
    user.email = email;
    user.password = password;
    user
      .save()
      .then((user) => res.status(200).send(user))
      .catch((e) => res.status(500).send("err not save"));
  });
};

module.exports.deleteById = function (req, res) {
  var { id } = req.params;
  User.deleteOne({ _id: id }, function (err, user) {
    if (err) return res.status(500).send("err not delete");
    res.status(200).send(user);
  });
};

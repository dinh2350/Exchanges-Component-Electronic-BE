var { User } = require("../models/User");

module.exports.create = async function (req, res) {
  try {
    var { name, yearOld, phone, address } = req.body;
    var newUser = new User({ name, yearOld, phone, address });
    newUser = await newUser.save();
    if (!newUser) return new throwError("err save user");
    res.status(200).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getAll = async function (req, res) {
  try {
    var users = await User.find();
    if (!users) return new throwError("err get list user");
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(err);
  }
};

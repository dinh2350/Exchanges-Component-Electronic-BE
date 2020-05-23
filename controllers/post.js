var { Post } = require("../models/Post");

module.exports.create = async function (req, res) {
  var { images, title, price, description, status, type, address } = req.body;
  console.log({ images, title, price, description, status, type, address });
  var newPost = new Post({
    images,
    title,
    price,
    description,
    status,
    type,
    address,
  });
  newPost
    .save()
    .then((post) => res.status(200).send(post))
    .catch((err) => res.status(500).send("err save"));
};

module.exports.getAll = async function (req, res) {
  Post.find({}, function (err, post) {
    if (err) res.status(500).send("err find");
    res.status(200).send(post);
  });
};

module.exports.update = function (req, res) {
  //   var { name, yearOld, phone, address, email, password } = req.body;
  //   var { id } = req.params;
  //   User.findById({ _id: id }, function (err, user) {
  //     if (err) res.status(404).send("not found user");
  //     user.name = name;
  //     user.yearOld = yearOld;
  //     user.phone = phone;
  //     user.address = address;
  //     user.email = email;
  //     user.password = password;
  //     user
  //       .save()
  //       .then((user) => res.status(200).send(user))
  //       .catch((e) => res.status(500).send("err not save"));
  //   });
};

module.exports.deleteById = function (req, res) {
  //   var { id } = req.params;
  //   User.deleteOne({ _id: id }, function (err, user) {
  //     if (err) return res.status(500).send("err not delete");
  //     res.status(200).send(user);
  //   });
};

module.exports.uploadAvatar = function (req, res) {
  //   var { id } = req.params;
  //   User.findById({ _id: id }, function (err, user) {
  //     if (err) res.status(404).send("not found user");
  //     user.avatar = config.host + "/" + req.file.path;
  //     user
  //       .save()
  //       .then((user) => res.status(200).send(user))
  //       .catch((e) => res.status(500).send("err not save"));
  //   });
};

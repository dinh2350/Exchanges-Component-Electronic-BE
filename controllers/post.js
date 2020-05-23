var { Post } = require("../models/Post");

module.exports.create = async function (req, res) {
  var { images, title, price, description, status, type, address } = req.body;
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
  var { images, title, price, description, status, type, address } = req.body;
  var { id } = req.params;
  Post.findById({ _id: id }, function (err, post) {
    if (err) res.status(404).send("not found post");
    post.images = images;
    post.title = title;
    post.price = price;
    post.description = description;
    post.status = status;
    post.type = type;
    post.address = address;
    post
      .save()
      .then((post) => res.status(200).send(post))
      .catch((e) => res.status(500).send("err not save"));
  });
};

module.exports.deleteById = function (req, res) {
  var { id } = req.params;
  Post.deleteOne({ _id: id }, function (err, post) {
    if (err) return res.status(500).send("err not delete");
    res.status(200).send(post);
  });
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

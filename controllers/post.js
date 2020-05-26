var { Post } = require("../models/Post");
var config = require("../config/index");
module.exports.create = async function (req, res) {
  var {
    images,
    title,
    price,
    description,
    status,
    type,
    address,
    user,
  } = req.body;
  var newPost = new Post({
    images,
    title,
    price,
    description,
    status,
    type,
    address,
    user,
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

module.exports.uploadImages = function (req, res) {
  var { id } = req.params;
  Post.findById({ _id: id }, function (err, post) {
    if (err) return res.status(500).send("err not found");
    var listImages = req.files.map((images) => config.host + "/" + images.path);
    post.images = listImages;
    post
      .save()
      .then((post) => res.status(200).send(post))
      .catch((err) => res.status(500).send("err save"));
  });
};

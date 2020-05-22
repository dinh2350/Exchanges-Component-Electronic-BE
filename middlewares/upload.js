const multer = require("multer");
const mkdirp = require("mkdirp");

module.exports.uploadImage = function (type) {
  //   mkdirp(`./uploads/${type}`, (err) => {
  //     if (err) return console.log(err);
  //   });

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({ storage });
  return upload.single(type);
};

const multer = require("multer");
const mkdirp = require("mkdirp");

// ./uploads/avatar
// ./uploads/trip
// ./uploads/coach

module.exports.uploadImage = (type) => {
  mkdirp(`./public/images/${type}`)
    .then((made) => console.log(`made directories, starting with ${made}`))
    .catch(console.log);

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

module.exports.uploadManyImage = (type) => {
  mkdirp(`./public/images/${type}`)
    .then((made) => console.log(`made directories, starting with ${made}`))
    .catch(console.log);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  const upload = multer({ storage });
  return upload.array(type);
};

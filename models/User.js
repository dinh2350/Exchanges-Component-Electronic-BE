var { Schema, model } = require("mongoose");
var bcrypt = require("bcryptjs");
const { promisify } = require("util"); // built-in nodejs

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);

var userSchema = Schema({
  name: { type: String, require: true },
  yearOld: { type: Number, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  address: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  console.log(this);
  const user = this;

  if (!user.isModified("password")) return next();

  genSalt(10)
    .then((salt) => {
      return hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
      next();
    });
});

var User = model("User", userSchema);

module.exports = {
  userSchema,
  User,
};

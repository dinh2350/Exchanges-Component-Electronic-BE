var { Schema, model } = require("mongoose");

var userSchema = Schema({
  name: { type: String, require: true },
  yearOld: { type: Number, require: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

var User = model("User", userSchema);

module.exports = {
  userSchema,
  User,
};

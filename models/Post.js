var { Schema, model } = require("mongoose");
var postSchema = Schema({
  images: { type: [String] },
  title: { type: String, require: true },
  price: { type: String, require: true },
  description: { type: String, require: true },
  status: { type: String, require: true },
  type: { type: String, require: true },
  address: { type: String, require: true },
  user: { type: Schema.Types.ObjectId, require: true },
});
var Post = model("Post", postSchema);
module.exports = {
  postSchema,
  Post,
};

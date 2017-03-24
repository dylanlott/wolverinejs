const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: Schema.Types.Mixed,
  date: Date,
  user: Schema.Types.ObjectId
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

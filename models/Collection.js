const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  wine: { type: Schema.Types.ObjectId, ref: "wines" },
  title: { type: String, required: true },
  description: { type: String},
  wines: { type: Array, required: true}
})

module.exports = Collection = mongoose.model('Collection', CollectionSchema);
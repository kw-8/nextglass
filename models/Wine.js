const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  country: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  variety: { type: String, required: true },
  winery: { type: String, required: true },
  tags: { type: Array, required: true }
})

module.exports = Wine = mongoose.model('Wine', WineSchema);
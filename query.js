const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));


let tags = [9]
while (tags.length < 4) {
  tags.push( Math.floor(Math.random()*56) + 1)
}

let primary_tag = tags.slice(0,1)
let other_tags = tags.slice(1,4)
let min_price = 15 * 0.6
let max_price = 15 * 1.8
let wines = ['61af9dd91bde0240f585c105', '61af9dd91bde0240f585c106']
console.log(tags)

Wine.find(
  {
    _id: {$nin: wines},
    tagIndex: {$elemMatch: {$in: primary_tag}},
    tagIndex: {$elemMatch: {$in: other_tags}},
    price: {$gte: min_price},
    price: {$lte: max_price},
    points: {$gte: 1},
    points: {$lte: 100 }
  }
).limit(10)
  .then((wines) => {
    console.log(wines)
  })
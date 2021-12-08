const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));


let tags = []
let primary_tag = tags[0]
let other_tags = tags[1,4]
let min_price = 15-5
let max_price = 15+5
tagIndex = true ? `tagIndex: {$in: [9]}` : ''
console.log(tagIndex)
Wine.find(
  {
    [$cond: primary_tag, {tagIndex: {$elemMatch: {$in: tags}}}, {}]
      // $cond: [ $size{tags} , {$in: tags} , {} ]
  },
  {
  // tagIndex,
  // tagIndex: {
  //   $in: tags
  // },
  price: {
    $gte: min_price - 2,
    $lte: max_price + 2
  }
}).limit(10)
  .then(wines => {
    console.log(wines.map(wine => wine.price), 'end')
  })
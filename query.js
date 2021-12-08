const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));


let tags = []
let primary_tag = tags.slice(0,1)
let other_tags = tags.slice(1,4)
let min_price = 15-5
let max_price = 15+5
// tagIndex = true ? `tagIndex: {$in: [9]}` : ''
// console.log(tagIndex)
Wine.find().limit(10)
  .then(wines => {
    console.log(wines.map(wine => wine.price), 'end')
  })
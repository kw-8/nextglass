const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

// convert all price and points values to integers
Wine.find()
  .then(wines => {
    wines.forEach(wine => {
      console.log(wine.id)
      wine.points = parseInt(wine.points)
      wine.price = parseInt(wine.price)
      wine.save()
    })
  })

// console.log(wine)
// wine.points = parseInt(wine.points)
// wine.price = parseInt(wine.price)
// wine.save()
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
    // console.log(parseInt(wine.points))
    // console.log(parseInt(wine.price))
    // wines.forEach(wine => {
    //   // console.log('outside')
    //   if (typeof wine.tagIndex[0] === 'string') {
    //     console.log('inside')
    //     wine.points = parseInt(wine.points)
    //     wine.price = parseInt(wine.price)
    //     // wine.save()
    //   }
    // })
  })
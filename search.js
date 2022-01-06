const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

Wine
  .aggregate([
    {
      $search: {
        "index": "test",
        "text": {
          "path": "description",
          "query": "loo",
          "fuzzy": {}
        }
      }
    },
    { 
      $project: {title: 1, variety: 1, country: 1, description: 1, price: 1, points: 1, winery: 1, tags: 1, tagIndex: 1, _id: 1, __v: 1} 
    }
  ])
  .then(wines => {
    console.log(wines)
  })
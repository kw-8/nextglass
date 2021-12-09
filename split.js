const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const Wine = require('./models/Wine')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

Wine.find()
  .then(wines => {
    wines.forEach(wine => {
      // console.log('outside')
      if (typeof wine.tagIndex[0] === 'string') {
        // console.log('inside')
        wine.tags = wine.tags[0].split(', '),
        wine.tagIndex = wine.tagIndex[0].split(', ').map(id => parseInt(id))
        wine.save()
      }
    })
    console.log('end')
  })

// Wine.find().forEach
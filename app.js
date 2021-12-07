const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const wines = require("./routes/api/wines");
const collections = require("./routes/api/collections");
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// test
app.get("/", (req, res) => { res.send("Hello World!!"); });

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users)
app.use("/api/wines", wines)
app.use("/api/collections", collections)

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Listening on port ${port}`)});



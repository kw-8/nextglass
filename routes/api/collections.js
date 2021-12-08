const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Collection = require('../../models/Collection');

// get all collections from current user
// works when not using 
router.get("/", passport.authenticate("jwt", { session: false} ), (req, res) => {
  Collection
  .find({user: req.user.id})
  .sort()
  .then(collections => res.json(collections))
  .catch(err => res.status(404).json({ noCollectionsFound: "No collections found" }))
});

// get collection by id
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  let wines = req.params.wines
  
  // for each tag on each wine, add to tag counter in tags
  let tags = {};
  wines.forEach(wineId => {
    Wines.find(wineId).then(wine => {

      // if tagId exists in tags, count up, o/w set to 1
      wtags.forEach(tagId =>
        tags[tagId] = tags[tagId] ? tags[tagId] + 1 : 1
      )
    })
  });
  // sort tags by counts
  let entries = Object.entries(tags)
  let sortedTags = entries.sort((a,b) => a[1] > b[1]).map(tag => tag[0])

  const collection = Collection
    .findById(req.params.id)
    .then(collection => (res.json(collection)))
    .catch(err => res.status(400).json(err))
  const suggestions = Wines
    .find({
      tagIndex: {in: [sortedTags[0]]}
    })
    .then(collection => (res.json(collection)))
    .catch(err => res.status(400).json(err))
  
  res.json({ collection, suggestions })
  
});

// create new collection 
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
  const { errors, isValid } = validateCollectionInput(req.body);
  if (!isValid) { return res.status(400).json(errors); };

  const newCollection = Collection.new({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    wines: req.body.wines
  });
  newCollection
    .save()
    .then(collection => res.json(collection))
});

// update collection
router.patch("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
  const { errors, isValid } = validateCollectionInput(req.body);
  if (!isValid) { return res.status(400).json(errors); };
});

module.exports = router;
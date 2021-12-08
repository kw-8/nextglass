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
  Collection
    .findById(req.params.id)
    .then(collection => (res.json(collection)))
    .catch(err => res.status(400).json(err))
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

// delete collection
router.delete("/:", passport.authenticate("jwt", { session: false }), (req, res) => {
  Collection 
    .findByIdAndDelete(req.params.id)
    .then(collection => res.json(collection))
    .catch(err => res.status(404).json(err))
});

module.exports = router;
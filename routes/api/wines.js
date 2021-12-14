const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Wine = require('../../models/Wine');

// get all wines
router.get("/", (req, res) => {
  Wine
    .find()
    .then(wines => res.json(wines))
    .catch(err => res.status(400).json(err))
});

// get wines by tag
router.get(`/tags/:tagName`, (req, res) => {
  // debugger
  Wine
    .find({ tags: req.params.tagName })
      .then(wines => res.json(wines))
      .catch(err => res.status(400).json(err))
});

// get wine by id
router.get("/:id", (req, res) => {
  Wine
    .findById(req.params.id)
    .then(wine => res.json(wine))
    .catch(err => res.status(400).json(err))
});

module.exports = router;
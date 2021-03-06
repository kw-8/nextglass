const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Wine = require('../../models/Wine');

// get all wines
router.get("/", (req, res) => {
  Wine
    .find()
    .limit(20)
    .then(wines => res.json(wines))
    .catch(err => res.status(400).json(err))
});

// get wines by tag
router.get(`/tags/:tagName`, (req, res) => {
  Wine
    .find({ tags: req.params.tagName })
    .limit(10)
    .then(wines => res.json(wines))
    .catch(err => res.status(400).json(err))
});
router.get(`/tags/:tagName/:pageNumber`, (req, res) => {
  Wine
    .find({ tags: req.params.tagName })
    .skip((req.params.pageNumber) * 10)
    .limit(10)
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

// search 
router.get("/search/:keyword", (req, res) => {
  Wine
    .aggregate([
      {
        $search: {
          "index": "test",
          "text": {
            "path": "description",
            "query": req.params.keyword,
            "fuzzy": {}
          }
        }
      },
      { 
        $project: {title: 1, variety: 1, country: 1, description: 1, price: 1, points: 1, winery: 1, tags: 1, tagIndex: 1, _id: 1, __v: 1} 
      }
    ])
    .limit(50)
    .then(wines => res.json(wines))
    .catch(err => res.status(400).json(err))
})

// specific ones
router.get("/specific/:ids", (req, res) => {
  const wines = req.params.ids.split('-')
  Wine.find({
    _id: { $in: wines }
  })
  .then(wines => (res.json(wines)))
  .catch(err => res.status(400).json(err))
});

module.exports = router;
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

// get wine by id
router.get("/:id", (res, req) => {
  Wine
    .findById(req.params.id)
    .then(wine => res.json(wine))
    .catch(err => res.status(400).json(err))
})

router.get(`/${tag}`, (res, rep) => {
  Wine
    .sort
})

module.exports = router;
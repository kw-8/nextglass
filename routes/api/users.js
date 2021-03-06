const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
      collections: req.user.collections
    }); 
  }
);

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) { return res.status(400).json(errors); };

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "An account already exists with this email."});
      } else {
        // Otherwise create a new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          collections: req.body.collections
        });
        // salt and hash new user's password before storing in db & saving user
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, email: user.email };
  
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      };
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!isValid) { return res.status(400).json(errors); };

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    };

  bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email
        }
        jwt.sign(
          payload, 
          keys.secretOrKey, 
          { expiresIn: 3600 }, 
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json({password: "Incorrect Password"});
      }
    });
  });
});

module.exports = router;
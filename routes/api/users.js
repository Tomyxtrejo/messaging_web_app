const express = require("express");
const router = express.Router();
// Bring in mongoose keys
const keys = require("../../config/keys");
// Bring in User model
const User = require("../../models/Users");
// Bring in bcrypt to encrypt the password
const bcrypt = require("bcryptjs");
// Bring in json web tokens
const jwt = require("jsonwebtoken");
// Bring in passport
const passport = require("passport");

// ******************* ROUTE GOES HERE *******************

// @route POST /api/users/register
// @description Register User
// @access Public
router.post("/register", (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(data => {
    // If the email address exists, return a 400 request
    if (data) {
      return res.status(400).json("Email address already exists!");
    }
    // Else, create a new user
    else {
      // Create a new instance of the Schema and save the values to it
      const newUser = new User({
        name: req.body.email,
        email: req.body.email,
        password: req.body.password
      });
      // Encrypting the password using bcrypt js
      // Generate a 10 character long salt
      bcrypt.genSalt(10, (error, salt) => {
        // Passing the salt to generate hash
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) {
            throw error;
          } else {
            // Swapping the values of the password with the newly generated hash
            newUser.password = hash;
            // Save the new user
            newUser
              .save()
              .then(user => {
                res.json(user);
              })
              .catch(error => {
                return res.json(error);
              });
          }
        });
      });
    }
  });
});

module.exports = router;

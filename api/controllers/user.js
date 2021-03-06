const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const {
    username,
    password
  } = req.body;
  User.create({
      username,
      password
    })
    .then(user => res.status(201).json(user))
    .catch(err => {
      console.log("Error:", error);
      res.status(500).json({
        error: "create User failed",
        message: err.message
      });
    });
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
const express = require('express');

const router = express.Router();
const models = require('../models/models');

module.exports = (passport) => {
  // const validateReq = user => (user.password === user.passwordRepeat);

  router.post('/register', (req, res) => {
    const user = new models.User({
      username: req.body.username,
      password: req.body.password,
    });

    user.save((err, user) => {
      if (err) {
        console.log(err);
      }
      console.log(user);
      res.json(user);
    });
  });

  router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('logged in');
    res.json({
      success: true,
      user: req.user,
    });
  });

  router.get('/logout', (req, res) => {
    req.logout();
  });

  return router;
};

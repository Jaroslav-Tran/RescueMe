const express = require('express');
const models = require('../models/models');

const router = express.Router();
const User = models.User;
const Document = models.Document;
const app = express();

router.get('/current_user', (req, res) => {
  if (!req.user) {
    throw error;
  }
  res.send(req.user);
});

/*
router.get('/contacts/create'), (req, res) => {
  if (req.body.firstname && req.body.lastname)
}
*/
module.exports = router;

const express = require('express');
const models = require('../models/models');

const router = express.Router();
const User = models.User;
const Contact = models.Contact;
const app = express();

// Saving user information when logging in
router.get('/current_user', (req, res) => {
  if (!req.user) {
    throw error;
  }
  res.send(req.user);
});

// Accessing User Information in Dashboard (Medical Information and List of Emergency Contacts) /Tested & Working/
router.get('/dashboard', (req, res) => {
  const userId = req.user._id;
  if (userId) {
    const userObj = null;
    User.findOne({ _id: userId })
      .exec((err, userObject) => {
        if (err) {
          res.send('Could not find a user');
        } else {
          console.log(userObject);
        }
        res.json(userObject);
      });
  } else {
    res.send('You are not logged in!');
  }
});


// Updating user medical information in user dashboard /Tested & Working/
router.post('/dashboard/updateMedicalInformation', (req, res) => {
  if (req.body.blood && req.body.allergies && req.body.medicalConditions) {
    User.findOneAndUpdate({ _id: req.user.id }, {
      $set: {
        medicalInformation:
                [new Date(), req.body.blood, req.body.allergies, req.body.medicalConditions]
      }
    }, (err, user) => {
      if (err) {
        throw err;
      } else {
        console.log('Updated');
        res.json(user);
      }
    });
  } else {
    console.log('Please fill all the necessary information!');
  }
});

// Accessing all the emergency contacts /Not working. Console log works and logs all the contacts but res.json sends only 1 contact/
router.get('/dashboard/contacts', (req, res) => {
  const userId = req.user._id;
  const contacts = [];
  if (userId) {
    User.findOne({ _id: userId })
      .exec((err, userObject) => {
        if (err) {
          res.send('Could not find a user');
        } else {
          const contactIds = userObject.contacts;
          // console.log("This should throw contact list", contactIds);
          contactIds.forEach((contact) => {
            Contact.findById(contact, (err, contact) => {
              if (err) {
                res.status(404).json({ error: 'Contact not found in database!' });
              } else {
                contacts.push([contact]);
                console.log('Contact found and added to contacts array', contact);
              }
              console.log('This should throw contacts ', contacts);
              // Console logs full array of contacts but res.json sends only 1 contact
              // res.json(contacts);
            });
          });
          // console.log('This should throw contacts ', contacts);
          // res.json(contacts);
          // Throws empty array ??
        }
      });
  } else {
    res.send('You are not logged in!');
  }
});

// Creating a new emergency contact in user dashboard /Tested & Working/
router.post('/dashboard/createContact', (req, res) => {
  if (req.body.fname.length > 0 && req.body.lname.length > 0 && req.body.phone.length > 0) {
    const newEmergencyContact = new Contact({
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      // owner: req.user._id,
      edit: new Date(),
    });
    newEmergencyContact.save((err, contact) => {
      if (err) {
        res.send(err);
      } else {
        User.findById(req.user._id, (err, user) => {
          if (err) {
            res.status(404).json({ error: 'Owner not found in database!' });
          } else {
            user.contacts.push(contact._id);
            user.save((err, user) => {
              console.log('Contact saved!');
              res.json(contact);
            });
          }
        });
      }
    });
  } else {
    res.status(400).send('Please, fill all the fields!');
  }
});

// Delete Contact Route 
router.post('/dashboard/deleteContact', (req, res) => {
  Contact.deleteOne({ fname: req.body.fname, lname: req.body.lname })
    .exec((err, contact) => {
      if (err) {
        res.send('Contact found and deleted from the database!');
      } else {
        console.log('Contact successfully deleted');
        res.send('Contact successfully deleted from the database.');
      }
    });
});


// Updating Contact Route
router.post('/dashboard/updateContact', (req, res) => {
  if (req.body.fname && req.body.lname && req.body.phone) {
    Contact.findOneAndUpdate({fname: req.body.fname, lname: req.body.lname}, {
      $set: {
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone
      }
    }, (err, contact) => {
      if (err) {
        throw err;
      } else {
        console.log('Updated');
        res.json(contact);
      }
    });
  } else {
    console.log('Please fill all the necessary information!')
  }
});

module.exports = router;

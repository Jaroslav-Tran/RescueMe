const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  console.log('Error: MONGODB_URI is not set. Did you run source env.sh ?');
  process.exit(1);
}

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  contacts: Array,
  medicalInformation: Array
});

const emergencyContactSchema = mongoose.Schema({
  fname: String,
  lname: String,
  phone: Number,
  owner: String,
  // last edit/opened
  edit: String,
});

const medicalInformationSchema = mongoose.Schema({
  lastUpdate: String,
  blood: String,
  allergies: String,
  medicalConditions: String
});
const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', emergencyContactSchema);
const Medical = mongoose.model('Medical', medicalInformationSchema);

module.exports = {
  User,
  Contact,
  Medical
};

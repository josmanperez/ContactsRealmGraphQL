import mongoose, { mongo } from 'mongoose';
require('dotenv').config();

// Mongo Connection
const user = process.env.user;
const pass = process.env.pass;
const endpoint = process.env.endpoint;
const uri = 'mongodb+srv://' + user + ':' + pass + '@' + endpoint + '/testSync?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on('error', err => {
  console.error(`The was an error trying to connect to the database: ${err}`);
});
const contactSchema = new mongoose.Schema({
  _partition: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

const Contacts = mongoose.model('contacts', contactSchema, 'Contact');

export { Contacts };
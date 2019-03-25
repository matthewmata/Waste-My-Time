var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/WasteMyTime', { useMongoClient: true })
  .then(() => console.log('Connected to MongoDB'))


var Schema = mongoose.Schema;

var ToDontSchema = new Schema({
  name:  String,
  priority: Number
});

var ToDont = mongoose.model('ToDont', ToDontSchema);

module.exports = ToDont

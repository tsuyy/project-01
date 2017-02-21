var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExhibitionSchema = new Schema({
  title: String,
  artistName: String,
  location: String,
  exhibitionDates: String,
  website: String,
  image: String
});

var Exhibition = mongoose.model('Exhibition', ExhibitionSchema);

module.exports = Exhibition;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExhibitionSchema = new Schema({
  title: String,
  artistName: String,
  location: String,
  // description: String,
  exhibitionDates: String,
  website: String,
  image: String
  // videoLink : String
});

var Exhibition = mongoose.model('Exhibition', ExhibitionSchema);

module.exports = Exhibition;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExhibitionSchema = new Schema({
  title: String,
  artist: String,
  locations: [ String ],
  description: String,
  exhibitionDates: String,
  website: String,
  images: [ String ]
});

var Exhibition = mongoose.model('Exhibition', ExhibitionSchema);

module.exports = Exhbition;

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/immersive-exhibitions");

var Exhibition = require('./exhibition');

module.exports.Exhibition = Exhibition;

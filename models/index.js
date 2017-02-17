var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/immersive-exhibitions");

var Exhibition = require('./exhibition');

module.exports.Exhibition = Exhibition;

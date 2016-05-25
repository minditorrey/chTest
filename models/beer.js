'use strict';

var mongoose = require('mongoose');


var beerSchema = new mongoose.Schema({
  name: { type: String, required: true},
  subname: { type: String },
  description1: { type: String },
  description2: { type: String },
  description3: { type: String },
  description4: { type: String },
  rating: { type: Number },
});


var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
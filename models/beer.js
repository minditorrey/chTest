'use strict';

var mongoose = require('mongoose');


var beerSchema = new mongoose.Schema({
  name: { type: String, required: true},
  subname: { type: String, required: true},
  description1: { type: String, required: true},
  description2: { type: String, required: true},
  description3: { type: String, required: true},
  description4: { type: String, required: true},
});


var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
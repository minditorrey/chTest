'use strict';

var mongoose = require('mongoose');


var itemSchema = new mongoose.Schema({
  name: { type: String, required: true},
  style: { type: String, required: true},

});


var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
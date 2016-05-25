'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();


router.use('/beer', require('./beer'));


module.exports = router;
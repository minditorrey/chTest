var express = require('express');
var router = express.Router();
var request = require('request');
var stormpath = require('express-stormpath');

var Beer = require('../models/beer');


router.get('/random', (req, res) => {
  request('http://api.brewerydb.com/v2/beer/random/?key=4fd63f53f2d4450bafd2ddd933b2c5f3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
 	res.send(body);
  }
  })
})


router.post('/', (req, res) => {
	console.log(req.body);
  Beer.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.get('/', (req, res) => {
  Beer.find({}, (err, beers) => {
    res.status(err ? 400 : 200).send(err || beers);
  });
});

router.route('/:id')
  .put((req, res) => {
    Beer.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, auction) => {
      res.status(err ? 400 : 200).send(err || beer);
    })
  })
  .delete((req, res) => {
    var beer = (req.body)
    Beer.findByIdAndRemove(req.params.id, (err, beer) => {
      res.status(err ? 400 : 200).send(err);
    })

  })



module.exports = router;


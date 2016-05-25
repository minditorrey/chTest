  request('http://api.brewerydb.com/v2/beer/random/?key=4fd63f53f2d4450bafd2ddd933b2c5f3', function (err, res, body) {
  body = JSON.parse(body)
  console.log('results:', body.results);
    res.status(err ? 400 : 200).send(err || beer);
  })
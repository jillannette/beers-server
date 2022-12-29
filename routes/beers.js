const express = require('express');
const router = express.Router();

//Normally you would be using a database not an array of 
//objects as below
const beers = [
  { id: '1', name: 'IPA' },
  { id: '2', name: 'Stout' },
  { id: '3', name: 'Brown' },
  { id: '4', name: 'Pilsner' }
];

//PARAM MIDDLEWARE (param must match up with route params
//below) this router.param allows us to reuse this function
//since it will be needed over and over again
router.param('beer', function(req, res, next, id) {
  req.beer = beers.find(beer => beer.id === id);

  next();
});

//Route below does not have to specify "beers" because 
//it is implied since we are using the router in beers.js
router.get('/', (req, res) => {
  res.send('hello from beers!');
});

router.get('/:beer', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

router.get('/:beer/reviews', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

module.exports = router;
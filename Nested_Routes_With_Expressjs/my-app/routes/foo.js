const express = require('express');
//Need to pass an options object to express.Router to merge the params from any parent route:
const router = express.Router();
const bar = require('./bar');
const baz = require('./baz')

/* GET /foo. */
router.get('/', function(req, res, next) {
  res.send('this is the index for foo');
});

// GET /foo/42
//Expecting a parameter? No problem! access URL params directly from the request object: req.params.nameOfParam:
router.get('/:number', function (req, res, next) {
  console.log(req.params.number);
  
  res.send('this is foo #' + req.params.number)
});

// GET /foo/bar
router.use('/bar', bar); // tell the router to use bar.js for child routes

// GET /foo/42/baz
router.use('/:number/baz', baz);

module.exports = router;

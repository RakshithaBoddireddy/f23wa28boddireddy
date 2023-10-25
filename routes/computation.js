var express = require('express');
var router = express.Router();

/* Math.log function */
router.get('/', function(req, res, next) {
  var randNo = Math.random()* 100;
  var x = randNo;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }
  var result = Math.log2(x);

  var out = `Math.log2(${x}) is ${result}`;
  
  res.render('computation', {title: out});
});

module.exports = router;

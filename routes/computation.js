var express = require('express');
var router = express.Router();

/* Math.log function */
router.get('/', function(req, res, next) {
  var randNo = Math.random()* 100;
  var x = randNo;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }
  var res = Math.log(x);
  var output = `Math.round(${x}) is ${res}`;
  
  res.render('computation', { title: output });
});

module.exports = router;

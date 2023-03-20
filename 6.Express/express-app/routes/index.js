var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {//this is a middle ware function
  res.render('index', { title: 'Express Tutorial' ,message:"Hello welcome to this world of Express "});
});

module.exports = router;

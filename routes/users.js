var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data=  Data.find().distinct('name');
  
  res.render('tests', { title:'test',datas:data});
});

module.exports = router;

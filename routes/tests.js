var express = require('express');
const mongoose = require('mongoose')
var router = express.Router();
var Data = require('../models/data');

/* GET home page. */
function mapping(array, key){
  let result=[];
  for (const a in array){
    result.push(array[a][key])
  }
  return result;
}
function timeConverter(UNIX_timestamp){
  // 'yyyy-mm-dd HH:MM:SS.ssssss'
  var a = new Date(UNIX_timestamp);
  var year = a.getFullYear().toString().padStart(4, '0');
  var month = (a.getMonth()+1).toString().padStart(2, '0');
  var date = a.getDate().toString().padStart(2, '0');
  var hour = a.getHours().toString().padStart(2, '0');
  var min = a.getMinutes().toString().padStart(2, '0');
  var sec = a.getSeconds().toString().padStart(2, '0');
  let time = `${year}-${month}-${date} ${hour}:${min}:${sec}`
  return time;
}

function timestamp2time(s){
  for (let t in s){
    s[t] = timeConverter(s[t]);
  }
}
router.get('/', async function(req, res, next) {
  let data= await Data.find({'name':'Node7'});
  let time = mapping(data,'time');
  let temperature = mapping(data,'temperature');
  let humidity = mapping(data,'humidity');
  timestamp2time(time);
  console.log('ok');
  res.render('tests', { title:'test',temperature:temperature,humidity:humidity,time:time});
});
router.post('/t',function(req, res, next){
  console.log(req.body.name);
  res.sendStatus(201);
});
module.exports = router;

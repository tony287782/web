var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var Data = require('../models/data');

mongoose.connect('mongodb://127.0.0.1:27017/data',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
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
  let data= await Data.find().distinct('name');
  data.sort(function(a, b) {
  if (parseInt(a.slice(4)) > parseInt(b.slice(4))) return 1;
  if (parseInt(a.slice(4)) < parseInt(b.slice(4))) return -1;
  return 0;
  });
  res.render('sensor_list', { title:'sensor_list',datas:data});

});

router.get('/:name', async function(req, res, next) {
  let data= await Data.find({name:req.params.name});
  let time = mapping(data,'timestamp');
  let temperature = mapping(data,'temperature');
  let humidity = mapping(data,'humidity');
  let moisture = mapping(data,'moisture');
  timestamp2time(time);
  res.render('plot', { title:'plot',temperature:temperature,humidity:humidity,moisture:moisture,time:time});
});
module.exports = router;

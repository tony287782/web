var express = require('express');
const mongoose = require('mongoose')
var router = express.Router();
var Data = require('../models/data');
router.post('/:name', function(req, res, next) {
  let data={
    name: req.params.name,
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    moisture: req.body.moisture,
    // time: Date.now()
    timestamp: req.body.timestamp
  }
  if (data.temperature && data.humidity){
    data = new Data(data);
    data.save(function(err){
      if (err) return console.error(err);
    })
    res.sendStatus(201);
  }else{
    res.sendStatus(400);
  }
});

router.get('/:name', async function(req, res, next) {


  let sensordata= await Data.find({name:req.params.name});
  // await Data.exec(function (err, d) {
  // if (err) return handleError(err);
  res.render('getdata',{data:sensordata});
  // // athletes contains an ordered list of 5 athletes who play Tennis
  // })
  	
});
module.exports = router;

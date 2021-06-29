var mongoose = require('mongoose')
var Data = require('./models/data');
// 連線資料庫
let status= false; 
async function connection(){mongoose.connect('mongodb://127.0.0.1:27017/data',(err, ret) => {
  if (err) {
    console.log('連線失敗')
  } else {
    console.log('連線成功')
    status=true;
  }
})
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongo is Connecting...")
});
var time= Date.now();
async function upload(){
  let data=new Data({
    name: 'Node2' ,
    temperature: 27+Math.random()*3,
    humidity: 40+Math.random()*5,
    moisture: 60+Math.random()*5,
    timestamp: time
  });
  while(status=false){
    console.log("hi")
  };
  data.save(function(err){
      if (err) return console.error(err);
      
    });
  time+=300000;
}

connection().then(()=>{
  for(i=0;i<1000;i++){
      upload();
      console.log("儲存成功");
  }
  
}).then(()=>{console.log('結束')});

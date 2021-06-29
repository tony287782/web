var mongoose = require('mongoose')
var Data = require('./models/data');
// 連線資料庫

var data;
// async function connect(){
//   await 

// }
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
// function view(){
//  Data.find({name: 'Node1'}, (err, ret) => {
//   if (err) {
//     console.log('查詢失敗')
//   } else {
//     console.log(ret) // ret 即為查詢出來的那一條文件
//     console.log('三小啦')
//   }
// })
// }
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
async function update(){
  let sensordata= await Data.updateMany({}, { $set: { name: 'Node1' } });
}

async function deletee(){
  let sensordata= await Data.remove({'name':'Node2'});
}
async function view(){
  let data= await Data.find({'name':'Node2'});

  // await Data.exec(function (err, d) {
  // if (err) return handleError(err);

  // // athletes contains an ordered list of 5 athletes who play Tennis
  // })

  console.log(data);

  
}
deletee();
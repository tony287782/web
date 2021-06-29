// const mongoose = require('mongoose')
// var Data = require('./models/data');
// // 連線資料庫
// mongoose.connect('mongodb://127.0.0.1:27017/data',{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// const Schema = mongoose.Schema
// // 通過 new 建立一個Schema
// const sensorSchema = new Schema({
//   // 這裡來設計文件的結構，後面插入集合的每一個文件必須是以下指定的結構
//   name: {
//     type: String,
//     required: true 
//   },
//   temperature: {
//     type: Number,
//     required: true
//   },
//   humidity:{
//     type: Number,
//     required: true
//   },
//   time:{
//     type: Number,
//     required: true 
//   }
// })
// const Sensor = mongoose.model('Sensor', sensorSchema)



// Data.find('Node1', (err, ret) => {
//   if (err) {
//     console.log('查詢失敗')
//   } else {
//     console.log(ret) // ret 即為查詢出來的那一條文件
//   }
// })
console.log("hello");
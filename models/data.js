var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/data',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const sensorSchema = new Schema({
  // 這裡來設計文件的結構，後面插入集合的每一個文件必須是以下指定的結構
  name: {
    type: String,
    required: true 
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity:{
    type: Number,
    required: true
  },
  moisture:{
    type: Number,
    required: true
  },
  timestamp:{
    type: Number,
    required: true 
  }
})


//Export model
module.exports = mongoose.model('data', sensorSchema);
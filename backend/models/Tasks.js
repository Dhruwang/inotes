const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    },
    tasks :{
      type:[String],
      required:true
    },
    
  });
  
  module.exports = mongoose.model('task',TaskSchema)
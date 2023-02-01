const mongoose = require('mongoose')
const { Schema } = mongoose;

const TodoSchema = new Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    },
    taskRemaining :{
      type:[String],
      required:true
    },
    taskCompleted :{
      type:[String],
      required:true
    },
    
    
  },{ timestamps: true });
  
  module.exports = mongoose.model('todo',TodoSchema)
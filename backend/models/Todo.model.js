const mongoose = require('mongoose')
const { Schema } = mongoose;

const TodoSchema = new Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    },
    task :{
      type:[String],
      required:true
    },
    
  });
  
  module.exports = mongoose.model('todo',TodoSchema)
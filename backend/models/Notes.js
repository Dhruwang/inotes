import mongoose from 'mongoose';
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title :{
    type:String,
    required:true
  },
  description :{
    type:String,
    required:true,
  },
  tags :{
    type:String,
  },
  date :{
    type:date,
    required:true
  }
});

module.exports = mongoose.model('notes',NoteSchema)
const mongoose =require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
       type:String,
       max:30,
       required:true, 
    },
    title:{
        type:String,
        max:50,
        required:true, 
     },
     sub:{
        type:String,
        max:500,
        required:true, 
     },
     Date:{
        type:Date,
      default:Date.now(),
     },
})


const Post =mongoose.model('post',postSchema,'Posts');

module.exports = Post;
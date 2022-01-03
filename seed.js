/*
هذا الملف للتأكد من السكيما


const Post =require("./models/Post");
const db =require("./config/database");


let newPost =[
    new Post({
        name:"abdulrahman",
        title:"AAAA",
        sub:"Node.js Post and get",
    }),

    new Post({
        name:"abdulrahman",
        title:"AAAA",
        sub:"Node.js Post and get",
    }), 
       new Post({
        name:"abdulrahman",
        title:"AAAA",
        sub:"Node.js Post and get",
    }),

]
newPost.forEach((data)=>{
    data.save((err)=>{
        if(!err){
            console.log(data)
        }
    })
})
*/

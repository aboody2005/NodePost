const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://aboody2005:11174906a@cluster0.a8d8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Database connected")
    }
})
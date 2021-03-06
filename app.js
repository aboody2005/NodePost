const express = require('express');
const app = express();
const router = require('./routes/index');

const port =3000;
const db = require("./config/database")
app.use(express.static('public'));

app.set('view engine','ejs')




app.use('/post', router);
app.get('/',(req,res)=>{
    res.render("home");
})
app.listen(process.env.PORT || port,()=>{
    console.log(`server is runing in port ${port}`)
});
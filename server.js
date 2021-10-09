const express =  require('express');
var cors = require('cors');
const userRoute = require('./routes/userRoutes');
var app = new express();

const path = require('path');
app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname+'/index.html'))
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

userRoute(app);
app.listen('3000')

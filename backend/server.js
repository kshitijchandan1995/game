const express=require('express');
const routeUser=require('./router/user');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors('*'));

app.use(express.json());
app.use(bodyparser.json());

app.use('/user',routeUser);



app.listen(5000,()=>{
    console.log('server is running on port 5000');
})
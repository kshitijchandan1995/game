const { response } = require('express');
const express=require('express');
const router=express.Router();
const db =require('../db');
const utils = require('../utils');

router.post('/signup',(request,response)=>{
    const{firstname,lastname,email,password}=request.body;
    const query=`insert into user (firstname,lastname,email,password) values ('${firstname}','${lastname}','${email}','${password}')`;
    db.query(query,(error,user)=>{
        response.send(utils.createResult(error,user));
    })
})

router.post('/login',(request,response)=>{
    const{email,password}=request.body;
    const query=`select id,firstname,lastname,email from user where email='${email}' and password='${password}'`;
    db.query(query,(error,user)=>{
        if(error)
        {
            response.send(utils.createError(error));
        }
        if(user.length===0)
        {
            response.send(utils.createError('invalid email or password'));
        }
        else{
            response.send(utils.createResult(error,user[0]));
        }
    })
})

router.get('/list',(request,response)=>{
    const query=`select * from emp`;
    db.query(query,(error,list)=>{
        response.send(utils.createResult(error,list))
    })
})

router.post('/employee',(request,response)=>{
    const{ename,edesc,efac,eloc}=request.body;
    const query=`insert into emp (ename,edesc,efac,eloc) values ('${ename}','${edesc}','${efac}','${eloc}')`;
    db.query(query,(error,user)=>{
        response.send(utils.createResult(error,user));
    })
})

router.delete('/:id',(request,response)=>{
    const{id}=request.params
    const query=`delete from emp where id='${id}'`;
    db.query(query,(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})


router.get('/:id',(request,response)=>{
    const{id}=request.params
    const query=`select * from emp where id='${id}'`;
    db.query(query,(error,result)=>{
        response.send(utils.createResult(error,result))
    })
})
module.exports=router;


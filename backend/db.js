const mysql=require('mysql2');
const pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'Prit@m1996',
        database:'room',
        waitForConnections:'true',
        connectionLimit:10,
        queueLimit:0,

    }
)
module.exports=pool
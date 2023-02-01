const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const data = require('mysql');
const { request, response } = require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparser.json());
add.use(express.json());
add.use(bodyparser.urlencoded({extended:true}));
add.use(express.static('public'));

let c = data.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "#Bsabaree1999",
    database : "contacts"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('database connected');
    }
})

add.post('/add',(request,response)=>{
    let {firstname,lastname,email,gender,phone,alternate} = request.body;
    let sql = 'insert into contact(firstname,lastname,email,gender,phone,alternate,status) values (?,?,?,?,?,?,?)';
    c.query(sql,[firstname,lastname,email,gender,phone,alternate,0],(error,result)=>{
        if(error){
            let b= {"status":"error"};
            response.send(b);
        }
        else{
            let b= {"status":"success"};
            response.send(b);
        }
    })
})

add.get('/contactsdetails',(request,response)=>{
    let sql = 'select * from contact';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

add.post('/delete',(request,response)=>{
    let id = request.body.id;
    let sql = 'delete from contact where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            let b= {"status":"error"};
            response.send(b);
        }
        else{
            let b= {"status":"success"};
            response.send(b);
        }
    })
})

add.get('/update/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from contact where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

add.put('/updatedata/:id',(request,response)=>{
    let {id} = request.params;
    let {firstname,lastname,email,gender,phone,alternate} = request.body;
    let sql = 'update contact set firstname=?,lastname=?,email=?,gender=?,phone=?,alternate=? where id=?';
    c.query(sql,[firstname,lastname,email,gender,phone,alternate,id],(error,result)=>{
        if(error){
            let b = {"status":"error"};
            response.send(b);
        }
        else{
            let b = {"status":"success"};
            response.send(b);
        }
    })
})

add.listen(3002,()=>{
    console.log('server running 3002');
})

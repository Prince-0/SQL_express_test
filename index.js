const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '@dbquery123',
    database: 'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log('Connection created');

    const creationQuery = `create table Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
    )`

    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('Table created');
    })
})

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(3000,(err)=>{
    console.log('Server Started');
})
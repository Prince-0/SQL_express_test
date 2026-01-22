const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '@dbquery123',
    database: 'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }

    console.log('Connection created');

    const creationQuery = `create table IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(100)
    )`

    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err.message);
            //connection.end();
            return;
        }
        console.log('Table created');
    })
})

module.exports = connection ;
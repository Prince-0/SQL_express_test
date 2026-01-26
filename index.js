const express = require('express');
const app = express();
const db = require('./util/testdb_connection');
const studentRouter = require('./routes/studentRouter');

const studentModel = require('./models/student');


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.use('/students',studentRouter);

db.sync({force:false}).then(()=>{
    app.listen(3000,(err)=>{
    console.log('Server Started');
    })
}).catch((err)=>{
    console.log(err);
})


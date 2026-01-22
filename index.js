const express = require('express');
const app = express();
const studentRouter = require('./routes/studentRouter');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.use('/students',studentRouter);

app.listen(3000,(err)=>{
    console.log('Server Started');
})
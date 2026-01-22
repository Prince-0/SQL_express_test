const db = require('../util/testdb_connection');

const addEntries = (req,res) => {
    const {name , email} = req.body;

    const insertQuery = `INSERT INTO Students (name,email) VALUES (?,?)`;

    db.execute(insertQuery, [name,email] , (err) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            //db.end();
            return;
        }

        console.log(`Entries added`);
        res.status(200).send(`Student with name ${name} successfully added.`);
    })
    
}

const updateEntries = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const updateQuery = `update students set name = ? where id = ?`
    db.execute(updateQuery , [name,id] , (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send('Student not found');
            return;
        }
        console.log('Entry updated');
        res.status(200).send('User has been updated');
    })
}

const deleteEntries = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = `delete from students where id = ?`;

    db.execute(deleteQuery , [id] , (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send('Entry deleted');
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send("user not available");
            return;
        }
        console.log('entry deleted');
        res.status(200).send(`user with id ${id} deleted.`);
    })
}

module.exports = { addEntries , updateEntries , deleteEntries };
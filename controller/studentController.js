const db = require('../util/testdb_connection');
const Student = require('../models/student');
const addEntries = async(req,res) => {
    try{
        const {name,email} = req.body;
        const student = Student.create({
            name:name,
            email:email
        });
        res.status(201).send(`User with name:${name} is added.`);
    }
    catch(err){
        res.status(500).send('Unable to make an entry.');
    }
}

const updateEntries = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const student = Student.findByPk(id);
        if(!student){
            res.status(404).send('User is not found.');
        }
        student.name=name;
        await student.save();
        res.status(200).send('User has been updated.');
    }
    catch(err){
        res.status(500).send('User cannot be updated.');
    }
}

const deleteEntries = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = Student.destroy({
            where:{
                id:id
            }
        });
        if(!student){
            res.status(404).send('User is not found');
        }
    }
    catch(err){
        console.log(err);
        res.status(200).send('Error encountered while deleting.');
    }

}

module.exports = { addEntries , updateEntries , deleteEntries };
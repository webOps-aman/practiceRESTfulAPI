// get data specific student
const express = require('express');
require('./db/conn');
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());

//create a new students
app.post("/students", async (req, res) =>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }

})

// read data
app.get("/students", async (req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
});

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);

        if(! studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
        
    } catch (e) {
        res.status(500).send(e);
    }
});

//delete data
app.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!id){
            return res.status(400).send();
        }else{
            res.send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})




//listen
app.listen(port, () => {
    console.log(`Connection is setup at port no. ${port}`);
});
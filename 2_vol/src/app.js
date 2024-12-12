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

//listen
app.listen(port, () => {
    console.log(`Connection is setup at port no. ${port}`);
})
const express = require('express');
require('./src/db/conn');
const Student = require('./src/models/students')
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());


app.post('/students', (req, res) => {
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((er) => {
        res.send(er);
    })
})


app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})
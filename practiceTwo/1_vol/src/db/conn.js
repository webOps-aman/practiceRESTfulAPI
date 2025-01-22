const mongoose = require('mongoose');
const URI = "mongodb://127.0.0.1:27017/studentsapitwo";

mongoose.connect(URI).then(() =>{
    console.log("connection is connected succesfully")
}).catch((e) =>{
    console.log("no connection");
})
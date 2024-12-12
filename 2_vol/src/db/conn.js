const mongoose = require('mongoose');

//connection creation and creating new db
mongoose.connect("mongodb://127.0.0.1:27017/students-api")
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.error("Could not connect to MongoDB:", err));
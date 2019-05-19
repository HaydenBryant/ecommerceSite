const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const multer = require("multer")

//get routes 
const posts = require("./routes/api/posts.js")

const app = express()

//this is multer middleware to store and call files for image storing
// app.use(multer({ dest: './uploads/',
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//    }));

//parse data
app.use(bodyParser.urlencoded({extended: false}))

const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("mongo db has connected")
    )
    .catch(err => console.log(err));

// use routes
app.use("/api/posts", posts)

const port = process.env.PORT || 5000;
app.listen(port, (err) => console.log("server is on running on port " + port))
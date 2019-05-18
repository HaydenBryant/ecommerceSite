const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("mongo db has connected")
    )
    .catch(err => console.log(err));

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Home page is live")
})

const port = process.env.PORT || 5000;
app.listen(port, (err) => console.log("server is on running on port " + port))
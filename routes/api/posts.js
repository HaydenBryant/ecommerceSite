const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const multer = require("multer")

//get post schema 
const post = require("../../models/Post.js")

//this is multer middleware to store and call files for image storing
app.use(multer({ dest: ‘./uploads/’,
    rename: function (fieldname, filename) {
      return filename;
    },
   }));

// @route    GET /api/posts/test
// @desc     tests get route
// @access   public
router.get("/testing", (req, res) => {res.send("Hey tom, it's Maddie")
})

// @route    GET /api/posts
// @desc     tests get route
// @access   public
router.post("/", (req, res) => {
    const newPost = new Post({
        email: req.body.email,
        item: req.body.item,
        condition: req.body.condition,
        description: req.body.description,
        date: req.body.date,
        startingBid: req.body.startingBid,
        buyNow: req.body.buyNow,
        bidEndDate: req.body.bidEndDate,
        shippingCost: req.body.shippingCost,
        img: req.body.img
    })

    //save to db
    newPost.save().then(data => res.JSON(data))


})


module.exports = router
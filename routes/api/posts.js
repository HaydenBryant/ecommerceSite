const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();

//get post schema 
const post = require("../../models/Post.js")

const validatePostInput = require("../../validations/post.js");


// @route    GET /api/posts/test
// @desc     tests get route
// @access   public
router.get("/testing", (req, res) => {res.send("Hey tom, it's Maddie")
})

// @route    GET /api/posts
// @desc     tests get route
// @access   public
router.post("/", jsonParser, (req, res) => {
    
    // const { errors, isValid } = validatePostInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

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
    newPost.save().then(data => res.json(data))


})


module.exports = router
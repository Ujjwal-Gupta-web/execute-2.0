const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Booking=require("../models/Booking");

router.post("/", async (req, res) => {

    let obj = req.body;

    const booking = new Booking({
        ...obj
    })

    booking.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }
        //console.log(document);
        return res.json({ "message": "Booking in progress", tag: true })
    })

})

router.get("/", async (req, res) => {

    const bookings = await Booking.find().sort({_id:-1});

    if(bookings){
        return res.json({ "message": bookings, tag: true })
    }
    return res.json({ "message": "Some Error occured", tag: false })

})


module.exports = router;
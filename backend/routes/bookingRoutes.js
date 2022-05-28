const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const userConfirmation = require("../models/userConfirmation");
const verifyToken = require("../middleware/verifyToken")

router.post("/", verifyToken, async (req, res) => {
    let {
        business_id,
        user_id,
        msg
    } = req.body;

    const booking_status = new userConfirmation({
        business_id,
        user_id,
        msg
    })

    booking_status.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }
        return res.json({ "message": "Booking in progress", tag: true })
    })

})

router.get("/", verifyToken, async (req, res) => {

    const bookings = await Booking.find().sort({ _id: -1 });

    if (bookings) {
        return res.json({ "message": bookings, tag: true })
    }
    return res.json({ "message": "Some Error occured", tag: false })

})

router.put("/:id", verifyToken, async (req, res) => {
    try {
        const {
            userConfirmation_id,
            msg,
            amt,
            user_status,
            business_status
        } = req.body;
        let confirm = await userConfirmation.findOne({ _id: userConfirmation_id })
        if (!confirm || confirm.business_status == -1 || confirm.user_status == -1) {
            return res.status(401).json({ tag: false, msg: "Invalid User" })
        }
        if (req.params.id == 1) {
            if (user_status == 1) {
                Booking.create({ user_id: confirm.user_id, business_id: confirm.business_id, payment_amount: confirm.amt }, (err) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({ tag: false })
                    }
                    else {
                        userConfirmation.deleteOne({ _id: userConfirmation_id }, function (err) {
                            if (err) {

                                return res.json({ "message": "Some error occured try again", "tag": false })
                            }
                            else {
                                return res.json({ "message": "Deleted", "tag": true })
                            }
                        });
                    }
                })
            }
            else {
                confirm.user_status = user_status;
                confirm.msg = msg;
                confirm.save(function (error, document) {
                    if (error) {
                        console.error(error)
                        return res.json({ "message": "try again", "tag": false })
                    }
                    return res.json({ "message": "Booking in progress", tag: true })
                })
            }
        }
        else {
            confirm.business_status = business_status;
            confirm.msg = msg;
            confirm.amt = amt;
            confirm.save(function (error, document) {
                if (error) {
                    console.error(error)
                    return res.json({ "message": "try again", "tag": false })
                }
                return res.json({ "message": "Booking in progress", tag: true })
            })
        }

    }
    catch (e) {
        return res.status(500).json({ tag: false })
    }
})


module.exports = router;
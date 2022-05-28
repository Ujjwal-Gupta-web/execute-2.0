const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User=require("../models/User");
const verifyToken = require("../middleware/verifyToken");
const Review = require("../models/Review");
const isUserExist = require("../middleware/isUserExist");


router.get("/auth", verifyToken ,async (req, res) => {
    
    try {
        const decoded = req.body['decoded']
        const user = await User.findOne({ _id: decoded.id }).select("-password");

        return res.json({
            "tag": true,
            "message": user
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            "tag": false,
            "message": "Not Atuhenticated User"
        });
    }
})

router.post("/login", async (req, res) => {

    const obj = req.body;
    const result = await User.findOne({ email: obj.email });
    if (result) {
        bcrypt.compare(req.body.password, result.password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY);
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }

})


router.post("/signup", async (req, res) => {

    let { contact,email,
        password,
        name} = req.body;

    const result = await User.findOne({ email });
    
    if (result) {
        return res.json({ "message": "User already exists", "tag": false })
    }
    else {
        var hash = bcrypt.hashSync(password, 8);
        password = hash;
        const user = new User({
            contact,
            email,
            password,
            name
        })
        user.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            const token = jwt.sign({ id: document._id }, process.env.SECRET_KEY);
            return res.json({ "message": "User SignUp Success", tag: true,token })
        })
    }

})

router.post("/review",verifyToken,isUserExist,async (req, res) => {

    let { business_id,rating } = req.body;

    const review = new Review({
        business_id,rating
    })

    review.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }
        //console.log(document);
        return res.json({ "message": "Review added", tag: true })
    })

})




module.exports = router;
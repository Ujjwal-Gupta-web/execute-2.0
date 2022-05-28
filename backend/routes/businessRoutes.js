const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const Business=require("../models/Business")
const verifyToken = require("../middleware/verifyToken");


router.get("/auth", verifyToken ,async (req, res) => {
    
    try {
        const decoded = req.body['decoded']
        const user = await Business.findOne({ _id: decoded.id }).select("-business_password");

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
    const result = await Business.findOne({ business_email: obj.email });
    if (result) {
        bcrypt.compare(req.body.password, result.business_password, function (err, hashed) {
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

    let {
        business_name,
        business_owner_name,
        business_email,
        business_mobile_number,
        business_gst,
        business_website_url,
        business_description,   
        business_service_type,   
        business_password,
        business_city
    }= req.body;

    const result = await User.findOne({ business_email });

    if (result) {
        return res.json({ "message": "Business already exists", "tag": false })
    }
    else {
        var hash = bcrypt.hashSync(business_password, 8);
        business_password = hash;
        const user = new Business({
                business_name,
                business_owner_name,
                business_email,
                business_mobile_number,
                business_gst,
                business_website_url,
                business_description,   
                business_service_type,   
                business_password,
                business_city
            })
        user.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            const token = jwt.sign({ id: document._id }, process.env.SECRET_KEY);
            return res.json({ "message": "Business SignUp Success", tag: true,token })
        })
    }

})





module.exports = router;
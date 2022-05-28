const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

const Service=require("../models/Services");

router.post("/",verifyToken,async(req,res)=>{
    const {service_name}=req.body;
    const service=new Service({
        service_name
    })

    service.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }
        //console.log(document);
        return res.json({ "message": "Services added", tag: true })
    })
})

router.get("/",async(req,res)=>{

    const services = await Service.find();

    if (services) {
        return res.json({ "message": services, tag: true })
    }
    return res.json({ "message": "Some Error occured", tag: false })
})


module.exports = router;
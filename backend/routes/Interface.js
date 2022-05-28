const express=require("express")
const router=express.Router()
const verifyToken=require("../middleware/verifyToken")
const isUserExist=require("../middleware/isUserExist")
const Event = require("../models/Event")
const Business = require("../models/Business")
const Review = require("../models/Review")


router.get("/events",async(req,res)=>{
    try{
        let event=await Event.find({}).sort({name:1})
        return res.status(200).json({tag:true,data:event})
    }
    catch(e){
        return res.status(500).json({tag:true,data:[]})
    }
})

router.get("/business",async(req,res)=>{
    try{
        let business=await Business.find({})
        let review=await Review.find({})
        let rating={}
        for(let val of business){
            rating[val._id]=0;
        }
        for(let val of review){
            rating[val.business_id]+=1;
        }
        for(let val of business){
            val['rating']=(rating[val._id]/(Object.keys(rating).length))
        }
        return res.status(200).json({tag:true,business})
    }
    catch(e){
        return res.status(500).json({tag:true,data:[]})
    }
})

module.exports=router;
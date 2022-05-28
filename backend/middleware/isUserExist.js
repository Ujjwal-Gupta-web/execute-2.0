const User = require("../models/User")

const isUserExist=async(req,res,next)=>{
    try{
        
        let user=await User.findOne({_id:req.body.decoded.id})
        if(user){
            next()
        }
        else{
            return res.status(401).json({"tag":false})
        }
    }
    catch(e){
        console.log(e)
        return res.status(401).json({tag:false})
    }
}

module.exports=isUserExist;
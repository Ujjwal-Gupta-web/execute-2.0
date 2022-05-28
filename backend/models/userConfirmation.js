const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userConfirmation = new Schema({
    business_id:String,
    user_id:String,
    user_status:{
        type:Number,
        default:0
    },
    business_status:{
        type:Number,
        default:0
    },
    amt:{
        type:Number,
        default:0,
        required:true
    },
    msg:{
        required:true,
        type:String
    }
    
});

module.exports = mongoose.model('userConfirmation', userConfirmation); 
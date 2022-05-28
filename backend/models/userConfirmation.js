const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userConfirmation = new Schema({
    business_id:String,
    user_id:String,
    user_status:{
        type:Boolean,
        default:0
    },
    business_status:{
        type:Boolean,
        default:0
    },
    msg:{
        required:true,
        type:String
    }
    
});

module.exports = mongoose.model('userConfirmation', userConfirmation); 
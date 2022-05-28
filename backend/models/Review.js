const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    business_id:String,
    user_id:String,
    rating:Number
});

module.exports = mongoose.model('Reviews', Review); 
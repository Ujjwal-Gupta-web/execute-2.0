const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Business = new Schema({
    business_name:String,
    business_owner_name:[],
    business_email:String,
    business_mobile_number:String,
    business_gst:String,
    business_website_url:String,
    business_description:String,   
    business_service_type:String,   
    business_password:String
});

module.exports = mongoose.model('Businesss', Business); 
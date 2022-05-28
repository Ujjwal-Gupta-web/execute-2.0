const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const Booking = new Schema({
    business_id:String,
    user_id:String,
    payment_status:Boolean,
    payment_type:Boolean,
    payment_amount:Number
});


module.exports = mongoose.model('Bookings', Booking); 
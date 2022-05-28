const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
    business_id:String,
    user_id:String
});

module.exports = mongoose.model('Bookings', Booking); 
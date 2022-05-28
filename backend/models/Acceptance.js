const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Acceptance = new Schema({
    business_id:String,
    user_id:String,
    acceptance_count:Number
});

module.exports = mongoose.model('Acceptances', Acceptance); 
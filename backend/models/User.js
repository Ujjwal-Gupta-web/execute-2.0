const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:String,
    email:String,
    password:String,
    contact:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Users', User); 
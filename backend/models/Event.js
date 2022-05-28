const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    event_name:{
        type:String,
        required:true,
    },
    services:{
        type:Array,
    }
});

module.exports = mongoose.model('Events', Event); 
const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema({
    service_name:String
});

module.exports = mongoose.model('Services', Service);
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/healthCare");
const userSchema= mongoose.Schema({
    serviceName:String,
    description:String,
    price:String,
})

module.exports=mongoose.model('User',userSchema);
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
const JobModel=mongoose.model('job',new mongoose.Schema({
    prof_uname:{type:String,required:true,},
    cmp_name:{type:String,required:true},
    desp:{type:String,required:true},
    address:{type:String,required:true},
    location:{type:String,required:true},
    mobile:{type:Number,required:true},
    service:{type:Array,required:true},
    price:{type:Number,required:true},
}));
module.exports=JobModel;
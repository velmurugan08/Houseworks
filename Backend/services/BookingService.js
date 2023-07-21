const mongoose=require("mongoose")
const BookingModel=require("../models/BookingModel")
const BookingService={

    addBooking:async(booking)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var bookdoc=await BookingModel.create(booking);
        
        return bookdoc
    },
    getByCustomer:async(cnam)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var cus_view=await BookingModel.find({cus_uname:cnam})
        
        return cus_view
    },
    getByProfessional:async(pnam)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var prof_view=await BookingModel.find({prof_uname:pnam})
        
        return prof_view
    }
}
module.exports=BookingService;
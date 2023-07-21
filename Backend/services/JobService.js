const mongoose=require("mongoose")
const JobModel=require("../models/JobModel")
mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
const JobService={

    addJob:async(job)=>{
        
        var jdoc=await JobModel.create(job);
        
        return jdoc;
    },
    getByServiceandLocation:async(loc)=>{

        var job=await JobModel.find({location:loc})
        
        return job
    },
    getByProfessional:async(pnam)=>{

        var prof_doc=await JobModel.find({prof_uname:pnam})
        
        return prof_doc
    }
}
module.exports=JobService;
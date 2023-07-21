const mongoose=require("mongoose")
const ProductModel=require("./models/JobModel")
const demo=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
    await ProductModel.insertMany([
        {
            prof_uname:"suriya_11",
            cmp_name:"Suriya Company",
            desp:"Suriya Engineer com",
            address:"456 nagar",
            location:"Coimbatore",
            mobile:1234567890,
            service:"Wiring",
            price:100,
        },
        {
            prof_uname:"vimal_11",
            cmp_name:"Vimal Company",
            desp:"Vimal Engineer com",
            address:"987 nagar",
            location:"Chennai",
            mobile:1234567890,
            service:"Basin",
            price:100,
        },
        {
            prof_uname:"naveen_11",
            cmp_name:"Naveen Company",
            desp:"Naveen Engineer com",
            address:"156 nagar",
            location:"Coimbatore",
            mobile:1234567890,
            service:"Basin",
            price:100,
        },
        {
            prof_uname:"kavi_11",
            cmp_name:"kavi Company",
            desp:"kavi Engineer com",
            address:"123 nagar",
            location:"Karur",
            mobile:1234567890,
            service:"Wiring",
            price:100,
        },
        {
            prof_uname:"danus_11",
            cmp_name:"Danus Company",
            desp:"Danus Engineer com",
            address:"456 nagar",
            location:"Karur",
            mobile:1234567890,
            service:"Wiring",
            price:150,
        },
        {
            prof_uname:"moni_11",
            cmp_name:"Moni Company",
            desp:"Moni Engineer com",
            address:"909 nagar",
            location:"Dindigul",
            mobile:1234567890,
            service:"Basin",
            price:100,
        },
        
    ])
    mongoose.connection.close();
}

demo().then(()=>console.log("Inserted data")).catch((err)=>console.log(err))
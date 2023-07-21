const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const BookingRouter = require("./routes/BookingRouter");
const JobRouter = require("./routes/JobRouter");
const PersonRouter = require("./routes/PersonRouter");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(JobRouter);
app.use(PersonRouter);
app.use(BookingRouter);
mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')

app.listen(8081,()=>{
    console.log("Server started!!!")
});
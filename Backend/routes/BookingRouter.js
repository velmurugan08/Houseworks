const express=require("express");
const BookingService = require("../services/BookingService");
const authenticate=require("../authenticate")
const BookingRouter = express.Router();
 
BookingRouter.post('/booking',async function (req, res) {
    console.log("Router Working");
    var book=req.body
    var booking = await BookingService.addBooking(book);
    res.json(booking);
});

BookingRouter.get("/booking/customer/:cnam",async (req, res) => {
    var { cnam } = req.params;
    var cdoc = await BookingService.getByCustomer(cnam);
    res.json(cdoc);
  });


  BookingRouter.get("/booking/professional/:pname", async (req, res) => {
    var { pname } = req.params;
    var pdoc = await BookingService.getByProfessional(pname);
    res.json(pdoc);
  });
  

module.exports= BookingRouter;
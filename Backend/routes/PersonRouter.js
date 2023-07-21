const express=require("express");
const PersonService = require("../services/PersonService");
const PersonRouter = express.Router();
 
PersonRouter.post('/newuser', async function (req, res) {
     var user = req.body;
     var newuser=await PersonService.signUp(user)
     res.json(newuser);
});

PersonRouter.post("/user/login", async (req, res) => {
  var { email,password } = req.body;
  var user = await PersonService.login(email,password);
  if(user!=null)
      res.send(user);
  else
      res.send("invalid");
});

PersonRouter.put('/user',async function(req,res){
    var {uname,password}=req.body
    res.json(await PersonService.changePassword(uname,password))
})
module.exports= PersonRouter;
const express=require("express");
const JobService = require("../services/JobService");
const JobRouter = express.Router();
 
JobRouter.post('/job', async function (req, res) {
  console.log("Router Working");
  var job=req.body
  var job = await JobService.addJob(job);
  res.json(job);
});

JobRouter.get("/job/:location", async (req, res) => {
  var { location } = req.params;
  var content = await JobService.getByServiceandLocation(location);
  res.json(content);
});

JobRouter.get("/companybook/:pnam", async (req, res) => {
  var { pnam } = req.params;
  var bookcnt = await JobService.getByProfessional(pnam);
  res.json(bookcnt);
});

module.exports= JobRouter;
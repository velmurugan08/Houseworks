const PersonService = require("./services/PersonService");
const authenticate =async (req, res, next) => {
    console.log(req.headers);
    var token = req.headers.authorization;
    if (token) {
        console.log(token)
        // token = token.split(" ")[1];
        var [u, p, r] = token.split(":");
        user = await PersonService.login(u, p);

        if (user.role == r) 
            next();
        else
            res.send("invalid");
  } 
  else 
    res.send("no token");
};

module.exports = authenticate;
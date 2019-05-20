const jwt = require("jsonwebtoken");
const APP_SECRET = "myappsecret";
const USERNAME = "a";
const PASSWORD = "a";
module.exports = function (req, res, next) {
 if ((req.url == "/api/login" || req.url == "/login")
 && req.method == "POST") {
 if (req.body != null && req.body.name == USERNAME
 && req.body.password == PASSWORD) {
 let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
 res.json({ success: true, token: token });
 } else {
 res.json({ success: false });
 }
 res.end();
 return;
 } else if ((((req.url.startsWith("/api/projects")
 || req.url.startsWith("/projects"))
 || (req.url.startsWith("/api/Branch")
 || req.url.startsWith("/Branch"))) && req.method != "GET"))
 {
    let token = req.headers["authorization"];
    if (token != null && token.startsWith("Bearer<")) {
    token = token.substring(7, token.length - 1);
    try {
    jwt.verify(token, APP_SECRET);
    next();
    return;
    } catch (err) { }
    }
    res.statusCode = 401;
    res.end();
    return;
    }
    next();
   }
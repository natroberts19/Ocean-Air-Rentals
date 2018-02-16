// Dependencies:
var path = require("path");
// var express = require("express");

// var router = express.Router();
// var db = require("../models/");

// Routes: Each of the routes below handle the HTML page that the user gets sent to.

module.exports = function(app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/manager", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/manager.html"));
  });

};



  // This route takes the client user to the main UI page. Won't work yet because we do not have the UI file loaded!
  // router.get("/", function(req, res) {
  //   res.redirect("/index");
  // });

  // This route takes the manager to the manager portal page. This will be driven by the manager input of the endpoint into the URL. This will not be linked from the index page at this time.
  // router.get("/manager", function(req, res) {
  //   res.redirect("/manager");
  // });

  // module.exports = router;
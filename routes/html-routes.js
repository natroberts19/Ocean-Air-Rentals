// Dependencies:
var path = require("path");

// Routes: Each of the routes below handle the HTML page that the user gets sent to.
module.exports = function(app) {
  // index route loads index.html
  app.get("/", function(req, res) {
    console.log("/ route");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // This route will allow the manager to view the portal page. (Disable this to use Handlebars.)
  // app.get("/manager", function(req, res) {
  //   // res.sendFile(path.join(__dirname, "../public/manager.html"));
  //   res.render("index")
  // });

};

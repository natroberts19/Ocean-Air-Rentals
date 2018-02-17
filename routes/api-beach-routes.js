// This route will set up the "get" that will display the Google Places and Weather.js data. (see pictures in Trello)

var db = require("../models/");


module.exports = function(app) {
// ** This is not set up correctly right now; just took mock up from whiteboard pic **
var data = {
    // Get the Places info that we want to include.
    beachname: g.beachname.rating,
    // Need to look at Gabe's file to get parameters.
    weather: w.day1, day2
}

// Get route for Google and Weather
app.get("/api/beach/:name", function(req, res) {
  var name = req.params.name;
//   ** These won't be strings, just place holding for now. **
  var g = "Google call";
  var w = "Weather call";

  res.json(data);
})

}


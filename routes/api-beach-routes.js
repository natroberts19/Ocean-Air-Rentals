// This route will set up the "get" that will display the Google Places and Weather.js data. 
var express = require("express");
var weather = require("weather-js");
var bodyParser = require("body-parser"); 

module.exports = function(app) {

  // This is the GET post to retrieve weather data for the selected city, state.
  app.get("/api/weather/:city/:state", function(req, res){
    weather.find({search: `${req.params.city}, ${req.params.state}`, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        res.json(result);
        console.log(result);
      });
      
});
}


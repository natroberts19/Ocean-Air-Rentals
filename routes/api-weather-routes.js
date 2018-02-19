var express = require("express");
var weather = require("weather-js");
var bodyParser = require("body-parser"); 
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/api/weather/:city/:state", function(req, res){
    weather.find({search: `${req.params.city}, ${req.params.state}`, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        res.json(result);
        console.log(result);
      });
      
});


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
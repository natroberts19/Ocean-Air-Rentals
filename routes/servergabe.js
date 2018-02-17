var express = require("express");
var weather = require("weather-js");
var bodyParser = require("body-parser"); // Account SID|                auth token|
var twilio = require("twilio")("ACc46cd71b5e05ea658f06e1cb9905d5ae", "b4f437ebfdb34b725e688bcb9b7e736e");
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
      });
      
});


// var client = new twilio(accountSid, authToken);

// client.messages.create({
//     body: 'Ocean Air Rentals',
//     to: '+12055662453',  // Text this number
//     from: '+14074567561' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));
app.get("/api/testtwilio", function (req, res){
    twilio.sendMessage({
    to: '+12055662453',  // Text this number
    from: '+14074567561', // From a valid Twilio number
    body: "I have decided to work for you!!"
    // }, function(err, data){
    //     if(err)
    //     console.log(err);
    //     console.log(data);
    // });
}).then((message) => console.log(message.sid));
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
var accountSid = 'AC95da765c9949c74f3987663951ae5bec';
var authToken = 'bd78189e871c46901f0a0dcb78dcc840';
var twilio = require("twilio");
var client = new twilio(accountSid, authToken);
// app.get("/testtwilio", function (req, res){
    client.messages.create({
    body: "I have decided to work for you!!",
    to: '+12055662453',  // Text this number
    from: '+14075129143' // From a valid Twilio number
    }).then((message) => console.log(message.sid));
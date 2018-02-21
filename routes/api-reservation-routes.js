// Requiring our sequelize model
var db = require("../models");

var twilio = require('twilio');

var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTHTOKEN; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = function (app) {

  // POST route for saving a new reservation
  app.post("/api/reservation", function (req, res) {
    console.log("reservation", req.body);
    db.Newreservation.create({
        name: req.body.reservationName,
        email: req.body.reservationEmail,
        phone: req.body.reservationPhone,
        beach: req.body.reservationBeach,
        rentalitem: req.body.reservationItem,
        rentaldate: req.body.reservationDate
      })
      .then(function (dbReservation) {
        res.json(dbReservation);

      });
    client.messages.create({
        body: 'Ocean Air Rentals - Successful Rental Confirmation.' +" " + 'Beach: '+ req.body.reservationBeach + " " + 'Rental Item: ' + req.body.reservationItem + " " + 'Date ' + req.body.reservationDate,
        to: '+' + req.body.reservationPhone, // Text this number
        from: '+14074567561' // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));
  });
}
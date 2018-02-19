// Requiring our sequelize model
var db = require("../models");

var twilio = require('twilio');

var accountSid = 'ACc46cd71b5e05ea658f06e1cb9905d5ae'; // Your Account SID from www.twilio.com/console
var authToken = 'b4f437ebfdb34b725e688bcb9b7e736e'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12345678901', // Text this number
    from: '+12345678901' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));



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
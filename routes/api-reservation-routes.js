// Requiring our sequelize model
var db = require("../models");

module.exports = function(app) {

// POST route for saving a new reservation
app.post("/api/reservation", function(req, res) {
    console.log("reservation", req.body);
    db.Newreservation.create({
      name: req.body.reservationName,
      email: req.body.reservationEmail,
      phone: req.body.reservationPhone,
      beach: req.body.reservationBeach,
      rentalitem: req.body.reservationItem,
      rentaldate: req.body.reservationDate
    })
    .then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
}


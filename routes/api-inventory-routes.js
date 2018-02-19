// These routes will allow the manager to update inventory.

// Requiring our sequelize model
var db = require("../models");

module.exports = function(app) {

// GET route for showing all reservations
app.get("/api/manager", function(req, res) {
    db.Newreservation.findAll({})
    .then(function(dbNewreservation) {
        res.json(dbNewreservation);
        // console.log("manager get", dbNewreservation);
    });
  });

// POST route for adding inventory
app.post("/api/manager", function(req, res) {
    console.log("manager post new inv", req.body);
    db.Newinventory.create({
      beach: req.body.beachName,
      rentalitem: req.body.rentalItem,
      price: req.body.price,
      rentable: req.body.rentable
    })
    .then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
}

// PUT route for updating reservation

// DELETE route for deleting a reservation

// Money view or reporting - future enhancement

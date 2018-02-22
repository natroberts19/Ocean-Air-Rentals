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

// PUT route for updating reservation
app.put("/api/manager", function(req, res) {
  db.Newreservation.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
  .then(function(dbNewreservation) {
    res.json(dbNewreservation);
  });
});


// DELETE route for deleting a reservation
app.delete("/manager/:id", function(req, res) {
  db.Newreservation.destroy({
    where: {
      id: req.params.id
    }
  })

  .then(function(dbNewreservation) {
    res.json(dbNewreservation);
  });
});

// POST route for adding inventory (new version of this has been copied to api-manager-routes)
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

// Closes the module.exports.
}
var db = require("../models");

module.exports = function(app) {

// POST route for adding inventory
app.post("/manager", function(req, res) {
    console.log("manager post new inv", req.body);
    db.Newinventory.create({
      beach: req.body.beachName,
      rentalitem: req.body.rentalItem,
      price: req.body.price,
      rentable: req.body.rentable
    })
    .then(function(dbInventory) {
    //   res.json(dbInventory);
      res.render(dbInventory);
    });
  });
}
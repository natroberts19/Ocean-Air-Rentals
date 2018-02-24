var db = require("../models");

module.exports = function (app) {

  // GET route to get the handlebars tables for both reservation and inventory.
  app.get("/manager", function (req, res) {
    console.log("get manager route");
    db.Newreservation.findAll({})
      .then(function (dbNewreservation) {
        // res.json(dbNewreservation);
        // console.log("manager get", dbNewreservation);
        db.Newinventory.findAll({})
          .then(function (dbNewinventory) {
            var hbsObject = {
              reservation: dbNewreservation,
              inventory: dbNewinventory
            }
            res.render("manager", hbsObject);
          });

      });

  });

  // POST route for adding inventory (new version of this has been copied to api-manager-routes)
  app.post("/api/manager", function (req, res) {
    console.log("manager post new inv", req.body);
    db.Newinventory.create({
        beach: req.body.beachName,
        rentalitem: req.body.rentalItem,
        price: req.body.price,
        rentable: req.body.rentable
      })
      .then(function (dbInventory) {
        // res.json(dbInventory);
        res.render("manager");
      });
  });

  // DELETE route for deleting a reservation
  app.delete("/api/manager/:id", function (req, res) {
    console.log(req.params.id);
    db.Newreservation.destroy({
        where: {
          id: req.params.id
        }
      })

      .then(function (dbNewreservation) {
        res.json(dbNewreservation);
        // res.redirect("/manager");
      });
  });

  // PUT route for updating reservation
  // app.put("/api/manager", function (req, res) {
  //   db.Newreservation.update(req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function (dbNewreservation) {
  //       res.json(dbNewreservation);
  //     });
  // });

}
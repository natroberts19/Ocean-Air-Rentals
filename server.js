
// This file is the initial starting point for the Node/Express server.

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing.
var db = require("./models");

// Sets up the Express app to handle data parsing:
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);

// ** These will be whatever we decide to name our models/tables. **
require("./routes/table1-api-routes.js")(app);
require("./routes/table2-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

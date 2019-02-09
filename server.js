// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var db = require("./models")
var sequelize = require("sequelize")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

 //Sets up the Express app to handle data parsing
 db.sequelize.sync().then(function() {
   app.Listen(PORT, function() {
     console.log("listening on port: " + PORT)
   })
 })
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Starting our Express app
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

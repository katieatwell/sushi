var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var routeController = require("./controllers/sushi_controllers.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routeController);

app.listen(PORT, function() {
    console.log("App on: " + PORT);
});

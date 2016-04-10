var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    app = express();


app.use(morgan('dev'));

var angularPath = path.join(__dirname + "/../app");
console.log("angular static path: " + angularPath);
app.use(express.static(angularPath));

var routesPath = path.join(__dirname, '/routes.js');
console.log("routes path: " + routesPath);
require(routesPath)(app, angularPath);

var port = process.env.PORT || 3002;

app.listen(port);

console.log('Listening on port ' + port + '...');

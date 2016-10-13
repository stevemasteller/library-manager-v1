var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var bodyParser   = require('body-parser');

var books        = require('./routes/books');
var loans        = require('./routes/loans');
var patrons      = require('./routes/patrons');

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// vendor scripts
app.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'node_modules', 'angular', 'angular.js'));
});
app.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'node_modules', 'angular-route', 'angular-route.js'));
});

app.use('/api/books', books);
app.use('/api/loans', loans);
app.use('/api/patrons', patrons);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Placeholder error handler
app.use(function(err, req, res, next) {
  res.status(err.status);   
  res.sendFile(__dirname + "/public/error.html");
});

module.exports = app;

/**
 * Created by Margaret on 3/8/2016.
 */
var express = require('express');

/* all my routes are going to be here */
var routes = require('./routes/index');
var about = require('./routes/about');

/* where things are within file system - import this */
var path = require('path');

/* our server */
var app = express();

/* templates for views are going to be in dir views, join dir of project and views; refew to views relative to parent directory */
app.set('views', path.join(__dirname, 'views'));
/* jade (template lang) is our view engine */
app.set('view engine', 'jade');

// need option to 3010 for Heroku
var port = process.env.PORT || 3010;

/* listen on this port, execute a success message if it's running */
app.listen(port, function () {
    console.log ('Currency app listening on port ' + port);
});

app.use(express.static(path.join(__dirname, "static")));

/* any request goes to index.js */
app.use('/', routes);
app.use('/about', about);

module.exports = app;
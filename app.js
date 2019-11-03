var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});
// define a route
app.get('/first', function (req, res) {
    res.send('some text here...');
});

// define a route with parameter
app.get('/profile/:name', function (req, res) {
    // define a variable
    var nameVar = req.params.name;
    res.send("<h1>" + nameVar + "</h1>");
});
// define a route with optional parameter
app.get('/panel/:name?', function (req, res) {
    // define a variable
    if (req.params.name)
        var nameVar = req.params.name;
    else
        nameVar = 'No Parameter set';

    //res.send("<h1> this is a optional : " + nameVar + "</h1>");
    res.send(`<h1> this is a optional :  ${nameVar} </h1>`);
});

// implement 404 page
app.get('*', function (req, res) {
    res.send("<h1>404 page</h1>");
});

var server = app.listen(3000, function () {
    console.log('App is running...');
});
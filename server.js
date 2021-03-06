/**
 * Created by DG on 1/3/2018.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





    // configure a public directory to host static content
    app.use(express.static(__dirname + '/public'));


    require("./server/app.js")(app);


var port = process.env.PORT || 3000;

app.listen(port);

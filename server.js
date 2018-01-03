/**
 * Created by DG on 1/3/2018.
 */

var express = require('express');
var app = express();

    // var bodyParser = require('body-parser');
    //
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    // // configure a public directory to host static content
    app.use(express.static(__dirname + '/public'));
    app.post("/api/blogpost",createPost);

    function createPost(req,res){
        console.log("Hello from server ");
       // res.send(200);
    }

    //require("./server/app.js")(app);


var port =  3000;

app.listen(port);

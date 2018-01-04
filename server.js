/**
 * Created by DG on 1/3/2018.
 */

var express = require('express');
var app = express();

    var bodyParser = require('body-parser');

     app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //connect to mongoDB
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/myBlogApp');

    //create schema to store the data
    var postSchema = mongoose.Schema({
        title : {type: String, required: true},
        body: String,
        tag:{type:String,enum:['POLITICS','ECONOMY','EDUCATION']},
        posted: {type: Date, default: Date.now()}

    },{collection:'post'});

    var PostModel = mongoose.model("PostModel",postSchema);



    // configure a public directory to host static content
    app.use(express.static(__dirname + '/public'));
    app.post("/api/blogpost",createPost);
    app.get("/api/blogpost",getAllPosts);

    function getAllPosts(req,res){
        PostModel
            .find()
            .then(
                function(posts){
                    res.json(posts);
                },
                function(err){
                    res.sendStatus(400);
                }
            );
    }

    function createPost(req,res){
        var post= req.body;
        console.log("Hello from server ");
       console.log(post);
       PostModel
           .create(post)
           .then(
               function(postObj){
                   res.json(200);
               },
                function(){
                    res.sendStatus(400);
                }

        );

    }

    //require("./server/app.js")(app);


var port =  3000;

app.listen(port);

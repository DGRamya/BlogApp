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
  //  mongoose.connect('mongodb://localhost/myBlogApp');

    var connectionString = 'mongodb://localhost/myBlogApp';

    if(process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    mongoose.connect(connectionString, function (err, db) {
        if(err){
        }
    });
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
    app.delete("/api/blogpost/:id",deleteOnePost);
    app.get("/api/blogpost/:id",postById);
    app.put("/api/blogpost/:id",updatePost);

    function updatePost(req,res){
        var postId = req.params.id;
        var post = req.body;
        PostModel
            .update({_id:postId},{
                title:post.title,
                body:post.body
            })
            .then(
                function(status){
                    res.sendStatus(200);

                },
                function(err){
                    res.sendStatus(400);
                }
            );

    }
    function postById(req,res){
        var postId = req.params.id;
        PostModel
            .findById(postId)
            .then(
                function(post){
                    res.json(post);
                },
                function(err){
                    res.sendStatus(400);
                }
            )
    }


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

    function deleteOnePost(req,res){
        var postID = req.params.id;
        PostModel
            .remove({_id: postID})
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(){
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


var port = process.env.PORT || 3000;

app.listen(port);

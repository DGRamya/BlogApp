/**
 * Created by DG on 1/6/2018.
 */
module.exports = function(app,postModel){
    app.post("/api/blogpost",createPost);
    app.get("/api/blogpost",getAllPosts);
    app.delete("/api/blogpost/:id",deleteOnePost);
    app.get("/api/blogpost/:id",postById);
    app.put("/api/blogpost/:id",updatePost);

    function updatePost(req,res){
        var postId = req.params.id;
        var post = req.body;
        postModel
            .updatePost(postId,post)
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
        postModel
            .postByID(postId)
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
        postModel
            .fetchAllPosts()
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
        postModel
            .removeOnePost(postID)
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
        postModel
            .newPost(post)
            .then(
                function(postObj){
                    res.json(200);
                },
                function(){
                    res.sendStatus(400);
                }

            );

    }
};
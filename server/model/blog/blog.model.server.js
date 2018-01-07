/**
 * Created by DG on 1/6/2018.
 */

module.exports = function(mongoose,q){
    var postSchema = require('./blog.schema.server')(mongoose);
    var postModel = mongoose.model("PostModel", postSchema);

    var api = {
        "newPost" : newPost,
        "updatePost": updatePost,
        "postByID": postByID,
        "fetchAllPosts": fetchAllPosts,
        "removeOnePost": removeOnePost

    };
    return api;

    function newPost(post){
        var deferred = q.defer();
        postModel
            .create(post,function(err,post){
                if(err)
                    deferred.reject(err);
                else
                    deferred.resolve(post);
            });
        return deferred.promise;

    }

    function updatePost(postId,post){
        var deferred = q.defer();
        postModel
            .update({_id:postId},{title:post.title, body:post.body},function(err,post){
                if(err)
                    deferred.reject(err);
                else
                    deferred.resolve(post);

            });
           return deferred.promise;
    }

    function postByID(postId){
        var deferred = q.defer();
        postModel
            .findById(postId,function(err,post){
                if(err)
                    deferred.reject(err);
                else
                    deferred.resolve(post);
            });
        return deferred.promise;
    }

    function fetchAllPosts(){
        var deferred = q.defer();
        postModel
            .find(function(err,posts){
                if(err)
                    deferred.reject(err);
                else
                    deferred.resolve(posts);
            });
        return deferred.promise;
    }

    function removeOnePost(postId){
        var deferred = q.defer();
        postModel
            .remove({_id: postID},function(err,post){
                  if(err)
                      deferred.reject(err);
                  else
                      deferred.resolve(post);
            });
        return deferred.promise;
    }
}
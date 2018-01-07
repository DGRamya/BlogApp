/**
 * Created by DG on 1/6/2018.
 */


(function () {
    angular
        .module("BlogApp")
        .factory("BlogService", blogService);

    function blogService($http) {


        var api = {
            createPost : createPost,
            deletePost : deletePost,
            editPost : editPost,
            updatePost : updatePost,
            getAllPosts : getAllPosts

        }

        return api;

        function createPost(post) {
            return $http.post("/api/blogpost", post);
        }

        function deletePost(postID){
            return $http.delete("/api/blogpost/"+postID);
        }

        function editPost(postID){
            return $http.get("/api/blogpost/"+postID);
        }
        function updatePost(post){
            return $http.put("/api/blogpost/"+post._id,post);
        }
        function getAllPosts(){
            return   $http.get("/api/blogpost");
        }
    }

})();
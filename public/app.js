/**
 * Created by DG on 1/3/2018.
 */
(function(){
    angular
        .module("BlogApp",[])
        .controller("BlogController",BlogController);

    function BlogController($scope,$http){
        $scope.createPost = createPost;

        function init(){
            getAllPosts();
        }
        init();
        function getAllPosts(){
            $http
                .get("/api/blogpost")
                .success(function(posts){
                    $scope.posts = posts;
                })
        }

        function createPost(post){

            console.log(post);
            $http
                .post("/api/blogpost",post)
                .success(getAllPosts);
        }
    }
})();
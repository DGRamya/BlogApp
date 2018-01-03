/**
 * Created by DG on 1/3/2018.
 */
(function(){
    angular
        .module("BlogApp",[])
        .controller("BlogController",BlogController);

    function BlogController($scope,$http){
        $scope.createPost = createPost;

        function createPost(post){
            console.log("createPost!!!");
            console.log(post);
            $http.post("/api/blogpost",post);
        }
    }
})();
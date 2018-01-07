/**
 * Created by DG on 1/6/2018.
 */

(function() {
    var app = angular
        .module("BlogApp");
    app.controller("BlogController",BlogController);

function BlogController($scope,$http, BlogService){

    var vm = this;
    vm.createPost = createPost;
    vm.deletePost = deletePost;
    vm.editPost = editPost;
    vm.updatePost = updatePost;

    function init(){
        getAllPosts();
    }
    init();
    function updatePost(post){
        BlogService
            .updatePost(post)
            .success(getAllPosts);

    }
    function getAllPosts(){
        BlogService
            .getAllPosts()
            .success(function(posts){
                vm.posts = posts;
                vm.post = {};
            })
    }
    function editPost(postID){
        BlogService
            .editPost(postID)
            .success(function(post){
                vm.post = post;
            });


    }
    function deletePost(postID){
        BlogService
            .deletePost(postID)
            .success(getAllPosts);
    }

    function createPost(post){

        BlogService
            .createPost(post)
            .success(getAllPosts);
    }
}
})();

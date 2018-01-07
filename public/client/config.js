/**
 * Created by DG on 1/6/2018.
 */
(function() {
    angular
        .module("BlogApp")
        .config(configuration)
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);

        function configuration($routeProvider){
            $routeProvider
                .when("/blog",{
                    templateUrl: "client/views/blog/templates/blog.view.client.html",
                    controller: "BlogController",
                    controllerAs: "model"

                })
                .otherwise({
                    redirectTo: "/blog"
                });
        }


})();

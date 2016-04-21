(function() {
    angular.module('APP', ['ui.router', 'ngResource']).config( config );

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("list", {
                    url: "/",
                    templateUrl: "views/list.html",
                    controller: "ListCtrl",
                    controllerAs: "list"
                }
            )
            .state("add",
                {
                    url: "/add",
                    templateUrl: "views/add.html",
                    controller: "AddCtrl",
                    controllerAs: "add"
                }
            )
            .state("edit",
                {
                    url: "/list/:id",
                    templateUrl: "views/edit.html",
                    controller: "EditCtrl",
                    controllerAs: "edit"
                }
            )
        ;
    }

})();




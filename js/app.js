var VERSION = "1.0.0";
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "./views/login/login.html",
        controller : 'loginController'
    })
    .when("/dashboard", {
        templateUrl : "./views/dashboard/dashboard.html",
        controller : 'dashboardController'
    })
    .otherwise({redirectTo: '/'});
});
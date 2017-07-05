var myFirstApplication = angular.module('myApp', ['ngRoute']);   //  Second parameter is a list of modules that my app is dependent on.
//  Once you reference/inject a dependency, then you can inject its objects into your functions or in the view.

myFirstApplication.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:someValue', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });
});

myFirstApplication.controller('mainController', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.myInputField = '';

}]);

myFirstApplication.controller('secondController', ['$scope', '$location', '$http', '$routeParams',  function ($scope, $location, $http, $routeParams) {

    $scope.myInputField = '';
    $scope.value = $routeParams.someValue || 1;


}]);
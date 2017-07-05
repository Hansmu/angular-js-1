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

myFirstApplication.service('nameService', function() {
    var self = this;
    this.name = 'John Doe';

    this.namelength = function () {
        return self.name.length;
    };
});

myFirstApplication.controller('mainController', ['$scope', '$location', '$http', 'nameService', function ($scope, $location, $http, nameService) {

    $scope.myInputField = '';
    console.log(nameService.name);

}]);

myFirstApplication.controller('secondController', ['$scope', '$location', '$http', '$routeParams',  function ($scope, $location, $http, $routeParams) {

    $scope.myInputField = '';
    $scope.value = $routeParams.someValue || 1;


}]);

//  Template is some default directive property.
myFirstApplication.directive("searchResult", function() {
    return {
        templateUrl: 'directives/search-result.html'
    };
});
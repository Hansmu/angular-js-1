var myFirstApplication = angular.module('myApp', ['ngMessages', 'ngResource']);   //  Second parameter is a list of modules that my app is dependent on.
//  Once you reference/inject a dependency, then you can inject its objects into your functions or in the view.

myFirstApplication.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) { //  Using the previous version will cause errors when minifying.
    //  With this version - a minifier will never change what's inside a string. With this the positions have to match, as there's no name to inject on.

   $scope.myMessage = 'Bananas are illegal';

   $timeout(function() {
       $scope.myMessage = 'Timeout message';    //  View gets automatically updated when the variable gets changed.
   }, 3000);
}]);
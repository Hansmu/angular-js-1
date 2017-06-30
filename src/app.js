var myFirstApplication = angular.module('myApp', ['ngMessages', 'ngResource']);   //  Second parameter is a list of modules that my app is dependent on.
//  Once you reference/inject a dependency, then you can inject its objects into your functions or in the view.

myFirstApplication.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.myInputField = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.myInputField);
    };
}]);
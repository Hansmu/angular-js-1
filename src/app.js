var myFirstApplication = angular.module('myApp', []);

myFirstApplication.controller('mainController', function ($scope) { //  Scope is just whatever variable, just add the dollar sign to easily recognize it as an Angular JS service.
    $scope.name = 'Hello dank memes';

    console.log($scope);
});
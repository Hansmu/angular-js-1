var myFirstApplication = angular.module('myApp', ['ngMessages', 'ngResource']);   //  Second parameter is a list of modules that my app is dependent on.
//  Once you reference/inject a dependency, then you can inject its objects into your functions or in the view.

myFirstApplication.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.myInputField = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.myInputField);
    };

    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!', newValue, oldValue);
    });

    //  This starts up a new thread without the AngularJS context. Have to add additional things in order to make Angular realize a change has happened.
    setTimeout(function() {
        $scope.$apply(function() {  //  This tells Angular JS to run its normal process when the variables change. This makes Angular aware.
            //  Angular wraps most of its services inside of $apply, so they update the view etc. $timeout vs setTimeout
            //  When using external libraries that aren't wrapped in $apply you need to do it manually like here.
            $scope.myInputField = 'newtiwtterlhanda';
            console.log('Scope changed!');
        });
    }, 3000);
}]);
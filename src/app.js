var myFirstApplication = angular.module('myApp', ['ngMessages', 'ngResource']);   //  Second parameter is a list of modules that my app is dependent on.
//  Once you reference/inject a dependency, then you can inject its objects into your functions or in the view.

myFirstApplication.controller('mainController', function ($scope, $log, $resource) { //  Scope is just whatever variable, just add the dollar sign to easily recognize it as an Angular JS service.
    //  Actually isn't whatever. Angular uses the name to inject dependencies, not the number of variable. So for example $log injects the service named $log that Angular has.

    $log.log($resource);
});
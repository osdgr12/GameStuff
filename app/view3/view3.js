'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope','view3Factory',function($scope,view3Factory) {
        console.log('view3 is reached');
        if ($scope) {
            console.log('its found');
            $scope.count = 10;
        }

        if (view3Factory) {
            console.log('factory exists');
        }
        $scope.isBaseball = true;
        $scope.isGolf = false;
        $scope.changeCount = function () {
            console.log('reached the event handler');
            if($scope.count>0)
                $scope.count -= 1;
            if ($scope.count == 0) {
                alert('You ran out of balls');
            }
        };
    }]);
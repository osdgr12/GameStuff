'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope','view3Factory','$timeout',function($scope,view3Factory,$timeout) {
        console.log('view3 is reached');
        $scope.name = view3Factory.getPlayers()[0].name;

       $scope.isBaseball = view3Factory.getIsBaseball();

       if ($scope.isBaseball) {
           $scope.count = view3Factory.getPlayers()[0].bb;
       }
       else{
           $scope.count = view3Factory.getPlayers()[0].gb;
       }

       $scope.changeCount = function () {
            console.log('reached the event handler');

           if($scope.isBaseball){
                if ($scope.count > 0)
                    $scope.count -= 1;
                if ($scope.count == 0) {
                    alert('You ran out of balls');
                }

                $scope.boolB = true;
                if (Math.random() * 10 > 5)
                    $scope.homerun = true;
                else
                    $scope.homerun = false;
            }
            else {


                if ($scope.count > 0)
                    $scope.count -= 1;
                if ($scope.count == 0) {
                    alert('You ran out of balls');

                }

                $scope.boolG = true;
                if (Math.random() * 10 > 5)
                    $scope.hole = true;
                else
                    $scope.hole = false;
            }

           $scope.isHitting = true;
           $timeout(function(){ $scope.isHitting=false;}, 1000);
        };
    }]);

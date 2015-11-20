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
        var index = view3Factory.getIndex();
        $scope.name = view3Factory.getPlayers()[index].name;

       $scope.isBaseball = view3Factory.getIsBaseball();

       if ($scope.isBaseball) {
           $scope.count = view3Factory.getPlayers()[index].bb;
       }
       else{
           $scope.count = view3Factory.getPlayers()[index].gb;
       }

       $scope.changeCount = function () {
            console.log('reached the event handler');

           if($scope.isBaseball){
                if ($scope.count > 0)
                    $scope.count -= 1;
                if ($scope.count == 0) {
                    alert('You ran out of baseballs');
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
                    alert('You ran out of golf balls');

                }

                $scope.boolG = true;
                if (Math.random() * 10 > 5)
                    $scope.hole = true;
                else
                    $scope.hole = false;
            }

           $scope.isHitting = true;
           if($scope.isBaseball) {
               $timeout(function () {
                   $scope.isHitting = false;
               }, 1100);
           }else{
               $timeout(function () {
                   $scope.isHitting = false;
               }, 2000);
           }
       };
    }]);

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','view1Factory',function($scope,view1Factory) {
    console.log('view1 is reached');
    if ($scope) {
        console.log('Scope found in view1');
        $scope.count = 10;
    }

    if (view1Factory) {
        console.log('view1 factory exists');
    }
    $scope.myFunction = function () {
        console.log('reached v1 event handler');

    };
    $scope.players=view1Factory.getPlayers();

    $scope.selectSport=function($index){
      view1Factory.setIndex($index);
    };

}]);

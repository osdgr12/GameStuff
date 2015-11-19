'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'view2Factory', function ($scope, view2Factory) {
    if ($scope) { console.log('its found'); }
    view2Factory.setIsBaseball(true);

    $scope.setBB = function(value){
        view2Factory.setIsBaseball(value);
    }

}]);

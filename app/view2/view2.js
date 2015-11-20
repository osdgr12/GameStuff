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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mapLocation, geoError);
    } else {
        alert('Geolocation is not supported');
    }

function mapLocation(pos) {
    var status = document.getElementById('status');
    status.innerHTML = 'Found your location! Longitude: ' + pos.coords.longitude +
        ' Latitude: ' + pos.coords.latitude;

    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"Player location"
    });
}

function geoError(error) {
    var status = document.getElementById('status');
    status.innerHTML = 'failed lookup ' + error.message;
}

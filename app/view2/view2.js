'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'view2Factory', function ($scope, view2Factory) {

    var geocoder;
    var map;
    var address = view2Factory.getPlayers()[view2Factory.getIndex()].adr;

    function initialize() {
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                        map.setCenter(results[0].geometry.location);

                        var infowindow = new google.maps.InfoWindow({
                            content: '<b>' + address + '</b>',
                            size: new google.maps.Size(150, 50)
                        });

                        var marker = new google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                            title: address
                        });
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open(map, marker);
                        });

                    } else {
                        alert("No results found");
                    }
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }
    }
    //google.maps.event.addDomListener(window, 'load', initialize);
    initialize();


    if ($scope) { console.log('its found'); }
    view2Factory.setIsBaseball(true);

    $scope.setBB = function(value){
        view2Factory.setIsBaseball(value);
    }

}]);

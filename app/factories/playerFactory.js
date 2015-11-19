/**
 * Created by Student on 11/18/2015.
 */

(function(){
    var players = [
        { id: 1, name: "Gaurav", image: "a.png", bb: 9, gb: 9},
        { id: 2, name: "Rajesh", image: "b.png", bb: 7, gb: 7},
        { id: 3, name: "Jason", image: "c.png", bb: 4, gb: 5},
        { id: 4, name: "Mihaly", image: "d.png", bb: 3, gb: 4}
    ];
    var isBaseball = false;
    var isGolf = false;

    var playerFactory=function(){
        var factory = {};
        factory.getPlayers = function () {
            return players;
        };
        factory.setIsBaseball = function (val) {
            isBaseball = val;
        };
        factory.setIsGolf = function (val) {
            isGolf = val;
        };
        factory.getIsBaseball = function () {
            return isBaseball;
        };
        factory.getIsGolf = function () {
            return isGolf;
        };
        return factory;
    };

    angular.module('myApp.view3').factory('view3Factory', playerFactory);
    angular.module('myApp.view2').factory('view2Factory', playerFactory);
    angular.module('myApp.view1').factory('view1Factory', playerFactory);
}());


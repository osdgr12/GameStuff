/**
 * Created by Student on 11/18/2015.
 */

(function(){
    //var players = [
    //    { id: 1, name: "Gaurav", image: "a.png", bb: 9, gb: 8},
    //    { id: 2, name: "Rajesh", image: "b.png", bb: 7, gb: 6},
    //    { id: 3, name: "Jason", image: "c.png", bb: 4, gb: 5},
    //    { id: 4, name: "Mihaly", image: "d.png", bb: 3, gb: 4}
    //];

    var players = [
        { id: 1, name: "Gaurav", image: "http://ecx.images-amazon.com/images/I/91JqImGjL2L._SL1500_.jpg", bb: 9, gb: 9
        },
        { id: 2, name: "Rajesh", image: "http://images.supersport.com/2015/7/Paul-Dunne-150720-Waves-G-300.jpg", bb: 7, gb: 7},
        { id : 3, name : "Jason", image: "http://www.clipartbest.com/cliparts/7ia/Kqy/7iaKqye5T.png", bb : 4, gb : 5},
        {
            id: 4, name: "Mihaly", image: "http://www.sportspectator.com/fancentral/golf/GolfPlayer.jpg", bb: 3, gb: 4}
    ];

    var isBaseball = false;
    var index=-1;

    var playerFactory=function(){
        var factory = {};
        factory.getPlayers = function () {
            return players;
        };
        factory.setIsBaseball = function (val) {
            isBaseball = val;
        };

        factory.getIsBaseball = function () {
            return isBaseball;
        };

        factory.setIndex=function(vIndex){
            index = vIndex;
        };

        factory.getIndex = function(){
            return index;
        };

        return factory;
    };

    angular.module('myApp.view3').factory('view3Factory', playerFactory);
    angular.module('myApp.view2').factory('view2Factory', playerFactory);
    angular.module('myApp.view1').factory('view1Factory', playerFactory);
}());


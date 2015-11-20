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
        { id: 1, name: "Gaurav", image: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Derek_Jeter_batting_stance_allison.jpg/250px-Derek_Jeter_batting_stance_allison.jpg", bb: 9, gb: 9, adr: "Mumbai, India"
        },
        { id: 2, name: "Rajesh", image: "http://www.intotherough.co.uk/assets/_files/images/oct_08/itr__1223643724_vijay_singh_golf_equipment.jpg", bb: 7, gb: 7, adr: "Bear, Delaware"},
        { id : 3, name : "Jason", image: "http://a4.espncdn.com/photo/2014/0821/mlb_pete_rose_01.jpg", bb:10, gb:6, adr:"Las Vegas, Nevada"},
        {
            id: 4, name: "Mihaly", image: "http://wpmedia.o.canada.com/2013/11/australia_world_cup_of_golf.jpg", bb: 3, gb: 4, adr:"Columbus, Ohio"}
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


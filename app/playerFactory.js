/**
 * Created by Student on 11/18/2015.
 */
app.factory('playerFactory', function () {
    var players = [
        { id: 1, name: "Gaurav", image: "a.png", bb: 10, gb: 10},
        { id: 2, name: "Rajesh", image: "b.png", bb: 10, gb: 10},
        { id: 3, name: "Jason", image: "c.png", bb: 10, gb: 10},
        { id: 4, name: "Mihaly", image: "d.png", bb: 10, gb: 10}
    ];
    var factory = {};
    factory.getPlayers = function () {
        return players;
    };
    return factory;
});

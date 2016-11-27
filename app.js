var request = require("request");

var movie = require('./movie.js');
var threeFilms = ["Tarzan", "The Lord of the Rings", "Frozen"];
threeFilms.forEach(function(film){
	movie.movie(film);
});

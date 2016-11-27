var request = require("request");

exports.movie = function (film){
	request("http://www.omdbapi.com/?t="+encodeURI(film)+"&plot=short&r=json", function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage. 
  	}
  }
);};

//let getFilmData = (id)=> $.get( "https://swapi.co/api/films/"+id+"/", (data)=> console.log(data));
//let buildHtmlElements = (responseData) => 
console.log("here");
function getFilmData(id) {
  $.get( "https://swapi.co/api/films/"+id+"/", function( data ) {
  	console.log(data);
  	buildHtmlElements(data);
});
}
function buildHtmlElements(responseData){
	var title = responseData.title;
  	var director = responseData.director;
  	var episode = responseData.episode;
  	var producer = responseData.producer;
  	var opening_crawl = responseData.opening_crawl;
  	var release_date = responseData.release_date;
  	$("#films").append("<div class="film">");
  	$( "p" ).addClass( "myClass yourClass" );
}
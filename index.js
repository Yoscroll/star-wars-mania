let getFilmData = (id)=> $.get( "https://swapi.co/api/films/"+id+"/", (data)=> buildHtmlElements(data) );
//let buildHtmlElements = (responseData) => 
console.log("here");
/*function getFilmData(id) {
  $.get( "https://swapi.co/api/films/"+id+"/", function( data ) {
  	console.log(data);
  	buildHtmlElements(data);
});
}*/
function buildHtmlElements(responseData){
	var title = responseData.title;
  	var director = responseData.director;
  	var episode = responseData.episode_id;
  	var producer = responseData.producer;
  	var opening_crawl = responseData.opening_crawl;
  	var release_date = responseData.release_date;
  	$('<h2 class="film-title">'+title+'</h2>').appendTo($("#films"));
  	$('<p class="film-director">Directed by: '+director+'</p>').appendTo($("#films"));
  	$('<p class="film-episode">Episode #'+episode+'</p>').appendTo($("#films"));
  	$('<p class="film-producer">Produced by: '+producer+'</p>').appendTo($("#films"));
  	$('<p class="film-opening_crawl"> Description:'+opening_crawl+'</p>').appendTo($("#films"));
  	$('<p class="film-release_date">Relase date:'+release_date+'</p>').appendTo($("#films"));
}
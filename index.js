let getFilmData = (id)=> $.get( "https://swapi.co/api/films/"+id+"/", (data)=> buildHtmlElements(data));
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
  	var episode = responseData.episode;
  	var producer = responseData.producer;
  	var opening_crawl = responseData.opening_crawl;
  	var release_date = responseData.release_date;
  	$('<h2 class="film-title">'+title+'</h2>').appendTo($("#films"));
  	$('<p class="film-director">'+director+'</p>').appendTo($("#films"));
  	$('<p class="film-episode">'+episode+'</p>').appendTo($("#films"));
  	$('<p class="film-producer">'+producer+'</p>').appendTo($("#films"));
  	$('<p class="film-opening_crawl">'+opening_crawl+'</p>').appendTo($("#films"));
  	$('<p class="film-release_date">'+release_date+'</p>').appendTo($("#films"));
}
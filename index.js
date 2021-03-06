let getFilmData = (id)=> $.ajax({
	url: `https://swapi.co/api/films/${id}`,
	type: 'GET',
	success: (data) => (getCharacters(data),buildHtmlElements(data)),//200
	error: alert("something went wrong"),
  }
});



console.log("here");
/*let keys = [["title",""],
["director","Directed by:"],
["episode_id","Episode:"],
["producer","Produced by:"],
["opening_crawl","Description:"],
["release_date","Relase date:"]];*/
//let getCharacters = (data)=> data.characters.map((link) =>$.get(link, (newData)=>newData.name));
let charList = "";
function getCharacters(data){
	console.log("getting chars..")
	data.characters.map(function(link){
	$.ajax({
		url: link,
		type: 'GET',
		success: (charData) => charList + charData.name
	})})
	console.log("done")
	console.log(charList)
};
//let getCharacters = (data) => data.characters.map((link)=>$.get( link, (data)=>data.name));
//let buildHtmlElements = (responseData) => (container = $("<div class='loadedFilms'>"),Object.entries(responseData).map((x)=>keys.map((y)=>y[0].includes(x[0]) ? (x[0]==="title" ? $(`<h2 class="film-title">${x[1]}</h2>`).appendTo(container):$(`<p class="film-${x[0]}"><b>${y[1]}</b> ${x[1]}</p>`).appendTo(container)):null)),$('#films').hide().prepend(container).fadeIn(300));
//Object.entries(responseData) returns everything in the object
//$('#films').hide().prepend(container).fadeIn(300)

let buildHtmlElements = (responseData) =>(
	console.log("building html..."),
	$('#films').hide().prepend($(`<div class='loadedFilms'>
	<h2 class="film-title">${responseData.title}</h2>
	<p class="film-director"><b>Directed by:</b> ${responseData.director}</p>
	<p class="film-episode"><b>Episode:</b> ${responseData.episode_id}</p>
	<p class="film-producer"><b>Produced by:</b> ${responseData.producer}</p>
	<p class="film-opening-crawl"><b>Description:</b> ${responseData.opening_crawl}</p>
	<p class="film-release-date"><b>Relase date:</b> ${responseData.release_date}</p>
	<p class="film-characters"><b>Characters: </b> ${charList}</p>
	</div>`)).fadeIn(300)
);
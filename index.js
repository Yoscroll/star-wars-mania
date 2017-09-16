let getFilmData = (id)=> $.get( `https://swapi.co/api/films/${id}/`, (data)=> (buildHtmlElements(data)));
console.log("here");
let keys = [["title",""],
["director","Directed by:"],
["episode_id","Episode:"],
["producer","Produced by:"],
["opening_crawl","Description:"],
["release_date","Relase date:"]];
let getCharacters = (data)=> data.characters.map((link) =>$.get( link, (newData)=>newData.name));
//let getCharacters = (data) => data.characters.map((link)=>$.get( link, (data)=>data.name));
let buildHtmlElements = (responseData) => (container = $("<div class='loadedFilms'>"),Object.entries(responseData).map((x)=>keys.map((y)=>y[0].includes(x[0]) ? (x[0]==="title" ? $(`<h2 class="film-title">${x[1]}</h2>`).appendTo(container):$(`<p class="film-${x[0]}"><b>${y[1]}</b> ${x[1]}</p>`).appendTo(container)):null)),$('#films').hide().prepend(container).fadeIn(300));
//Object.entries(responseData) returns everything in the object
//$('#films').hide().prepend(container).fadeIn(300)
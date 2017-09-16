let getFilmData = (id)=> $.get( "https://swapi.co/api/films/"+id+"/", (data)=> buildHtmlElements(data) );
console.log("here");
var keys = [["title",""],["director","Directed by:"],["episode_id","Episode:"],["producer","Produced by:"],["opening_crawl","Description:"],["release_date","Relase date:"]];
/*function buildHtmlElements(responseData){
   var pep = Object.entries(responseData).map(function(x){
      keys.map(function(y){
        if (y[0].includes(x[0])){
          if (x[0]==="title") {
            $('<h2 class="film-title">'+x[1]+'</h2>').appendTo($("#films"));
          }
          else{
            $('<p class="film-'+x[0]+'"><b>'+y[1]+'</b> '+x[1]+'</p>').appendTo($("#films"));
          }
        }
      });
   });
}*/
let buildHtmlElements = (responseData) => Object.entries(responseData).map((x)=>keys.map((y)=>y[0].includes(x[0]) ? (x[0]==="title" ? $('<h2 class="film-title">'+x[1]+'</h2>').appendTo($("#films")):$('<p class="film-'+x[0]+'"><b>'+y[1]+'</b> '+x[1]+'</p>').appendTo($("#films")) ))
let buildHtmlElements = (responseData) => Object.entries(responseData).map((x)=>keys.map((y)=>y[0].includes(x[0]) ? (x[0]==="title" ?console.log("ti") :console.log("not")):console.log("end no")));
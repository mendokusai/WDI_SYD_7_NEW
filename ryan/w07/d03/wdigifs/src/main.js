var tags;

var renderNavigation = function(tags) {
	var letters = "abcdefghijklmnopqrstuvwxyz#".split("");
	var navigation = "";

	_.each(letters, function(letter){
		navigation += "<a>" + letter + "</a>";
		
	});

	$("nav").html(navigation);

};

var renderGifList = function(search){
	$.getJSON("http://www.gifbase.com/tag/"+ search + "?format=json", function(data){
	
			var name = data.tag;
			var gifs = data.gifs;
			var listGifs = "<center><h1>" + name + "</h1></center>" //empty string for the gifs to go into.
			
			//does a loop through the gifs
			_.each(gifs, function(gif){
				//creates
				listGifs += "<center><div class=\"gif\"><img src='" + gif.url + "'><h4>" + gif.tags + "</h4></div></center>";
			});	

		$("#content").html(listGifs);
	});
}


var renderTagList = function(tags){
	var listString = "";

	_.each(tags, function(tag){
		//append string over and over.
		listString += "<div class=\"tag\">" + tag + "</div>";
		//bad
		//$("#content").append("<div class=\"tag\">" + tag + "</div>");
	});	

	$("#content").html(listString);
};

$(function(){
	$("nav").on("click", "a", function(){
		var self = this;

		var filteredTags = _.filter(tags, function(tag) {
			return $(self).text() === tag[0];
		});

		renderTagList(filteredTags);
	});

	$('#content').on("click", "div", function(){
		var search = $(this).text();
		renderGifList(search);

	});

	$.getJSON("http://www.gifbase.com/js/tags.json", function(data){
		// console.log(data);
		tags = data;
		renderTagList(data);
		renderNavigation(data);
	});
});




#morning exercise
	
validation.

remember event.preventDefaul();

#memory2
	working on hard stuff from last night.
	(saved in D03)

#morning tea

#AJAX
	XHR object

		event handler for AJAX objects
		similar to event handlers (click submit)
		success/done, failure,  always {{promises}}

	var jqxhr = $.ajax('example.php')
		.done..do this
		.fail..do this
		.always... do this regardless


*jack's sinatra app*
	
$.ajax('/hello') -> makes server request

better:
$.ajax('/hello').done(function(){ console.log(data);}) #-> "hello world"

$.ajax("/helllooo") #=> 404 *doesnt exist*

var request = $.ajax("/hello")
* needs a callback (done, fail, etc)
request.done(function(){alert("success");})

#what asyncronyous means.
1. get content from url,
 a. parse content,
 b. put on page
2. handle a click in the meanwhile!

$.ajax('/hello').done(function(){
	//this tells you it's finished.
	console.log(data);
	//you can do it without a done, but it doesn't DO anything.	
})

$.ajax('http://www.ryanpauley.com', {type: 'jsonp' }).done(funtion(data){ console.log(data);})

requests SHOULD be from the same domain.
//example won't work.

$.ajax('/hello.json").done(funtion(data){
	console.log(data);
})

gets json

#example 

$.ajax('/hello.json")
	.done(function(data){
		$.ajax("/combine", {type: "json", data: {word1: "cheese", word2: "cake"},method: "POST" })
		.done(function(innerData) {
		console.log(innerData);
		)};
)}

ajax defaults to get
check api rules to see what you can get and post

$.ajax("/hello.json")
	.done(function(data) {
		console.log(data);
		$.ajax("/combine", {type: "json", data: data, method: "POST"})
			.done(function(innerData)
			console.log(InnerData);
			});
		})

variables assigned on ajax returns will then give you the data.

$.get("/hello", function(data) {console.log(data); });

#quickly gets something. [shorthand version jquery](http://api.jquery.com/category/ajax/shorthand-methods/)

$.post("/hello", function(data) {console.log(data); });

#posts something


#jquery shortcuts
$.getJSON('/hello.json', function(data) {console.log(data):});
*gets the business*
$.post('/combine', {word1: "hello", word3: 'Fluffy"}, function(data) {console.log{data);});
#creates {combined: "Hello Fliffy, from AJAX!"}


#websockets demo

takes message, recieves messages
	echos out to all connected clients

var socket = new WebSocket('ws://localhost:8080/', 'echo-protocol');

socket.send('hello');

spocket.onmessage= function(message) {
	console.log(message);
}
//shows on all connected sockets

[socket.io](http://socket.io/)
node gem-type-thing


#api play
[gifbase](http://www.gifbase.com/api)

WDI Gifs
	-tags
	-gifs for tag
	-get specific gif

	#1 first thing: show all tags


	eventlistener in the function
		get json to get the links
			console.log


		/tag/smile?format

		/gif/[gif id]?format=json

		 /tag/[tag name]?format=json






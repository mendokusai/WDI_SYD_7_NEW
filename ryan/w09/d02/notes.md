#things todo until the end of the course

* Project 3
* Portfolio
* Blog with 3 posts
	-how you made project 1
	-how you made project 2
	-how you made project 3
* Sort out LinkedIn
* Sort out Twitter
* Finish Ruby & JS Paths on CodeSchool
* Polish Project 1 & 2


#tuesday todo

* handlebars
* portfolios
* extra options

#Lunchtalk with Prismatic

* homework:
	- portfolios
	-get internet points
	-blog posts
	-stack overflow
	-code school

#morning exercise
[Working with Enumerable](http://mauricio.github.io/2015/01/12/implementing-enumerable-in-ruby.html)

#handlebars

<div class= "entry">
<h1>{{title}}</h1>

</div>

write stuff, save as javascript, compile, get parsed html.

create quick templates and feed in user deetails
probably send via json

add handlebars cdn

*in console*
var headingTemplate = Handlebars.compile("<h1>{{title}}</h1>");

headingTemplate({title:"Hello World"})

#returns "<h1>Hello World</h1>"
JST['mytemplate']({title: "Hello World!"})


#need a script to render a tweet

#console exercise to make content appear in script

script id="status-template" type="text/x-handlebars-template"
	<div class="status">
		<p>{{content}}</p>
		<p><strong>{{username}}</strong></p>
	</div>
/script

$('#status-template').html();
	this prints the template script

var statusTemplate = Handlebars.compile($('#status-template').html());

var myStatus = new Status;

myStatus.set({ username: "Ryan", context: "Hi there everyone!"});

myStatus.toJSON()

JSON.stringify(myStatus.toJSON())

statusTemplate(myStatus.toJSON())

$('body').append(statusTemplate(myStatus.toJSON()))

find template pass model into JSON

#now we're doing a similar thing using the handlebar gem instead

in application.js:
//= require handlebars.runtime
//= require_tree ./templates

mkdir app/assets/javascripts/templates

make a template status.hbs

<div class="status">
	<p>{{content}}</p>
	<p><strong>{{username}}</strong></p>
</div>

JST['status']({ username: "Ryantown", content: "Hi there fancyboys!" })

$('body').append(JST['status']({username: "Ryborg", content: "Futile Candy is crunchy!})

var myStatus = new Status;

myStatus.set({ username: "Ryan", content: "Hi there"});

handlebars creates json and then its rendered into html

$('body').append(JST['status'](myStatus.toJSON()))

var myStatuses = new Statuses();

myStatuses.fetch()

myStatuses.models #p

#in application.js

var statusCollection = new Statuses();

statusCollection.fetch();

var statusCollection = new Statuses();

statusCollection.fetch().then(function(){
	console.log(statusCollection.models);
});

#returns array of statuses

*promises is the same as .then*

var statusCollection = new Statuses();

statusCollection.on('add', function(status){
	$('body').append(
		JST['status'](
			status.toJSON()
		);
	);
});

statusCollection.fetch();

#the following is rendered via the add function based on the fetch listener.

statusCollection.create({
	username: "Stanis the Manis",
	context: "The Iron Throne is Rightly Mine!"
});


markdown escapes by default, need to do error handling validations in the models custom validator that checks that the markdown is valid.



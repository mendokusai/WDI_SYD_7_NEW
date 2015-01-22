#todo cover this week

* Backbone
* More Rails
* Portfolios
* Some Testing
* Review
* Self-Reflection
* Soft-skilz
* Internet Points
* Working with UX


#backbone.js
[Backbone](backbonejs.org)

[sails](sailsjs.org) is the rails equivalent for javascript
focus: models and collections

model class for singluar instance of post, submit todo
collection is many posts, todos
	configure
		use json api
			keep things in sync
				on load, rerender view

##today focus on client side today

example twitter clone

rails new twitterclone
	start with index model

#status controller & status model
*rails g resource (like scaffold w/o crap)creates: blank controller, model, migration, routes*

	check migration (generated)
	rake that ish
	push that ish

	now to flesh out the controller with a basic api

	def index
		@statuses = Status.all
		respond_to do |f|
			f.json { render json: @statuses }
		end
	end

	make seed messages. 
	rake that ish

http://localhost:3000/statuses.json shows the messages constructed as json strings

#new controller called pages
controller plural good; model plural BAD

fix root in routes >> localhost:3000 = site Pages#home

All app on this page. BOYEE!

#Now for the backbone!

cdn tries to reduce latency
	by having nearby copies of stuff instead of one home server

adding cdn-links for underscore && backbone, chucking them to the bottom for quick loading.

adding two folders to assets/javascripts: collections && models

load models first
then collections
views
router

require_tree . loads all, but we're going to adjust it (in application.js)

*adding _tree ./models, then ./collections*

put all things into Status
var Status = Backbone.Model.extend({});

you don't set properties like we used to in backbone.

instead of:

* firstStatus.content: "Hi there!"
or 
* firstStatus.content

Do this:

* firstStatus.set({content: "Hi there!"})
* firstStatus.get('content')

firstStatus.toJson()

JSON.stringify(firstStatus.toJSON())


firstStatus.on("change", function(){
  alert("Status Changed");
});

firstStatus.set({context: "Holy Cow"}); 
#=>	alert posted

delete firstStatus.content 

secondStatus.on('change', function(){
	alert('second status changed');
});

secondStatus.set({context: 'test'}); 
#=> alert posted

These are Event listeners on the change
[Events that can be called](backbonejs.org/#Events-on) 


we can use models to sync, but it's better to use collections.

the callback function, here, happens on the change of the content. 


#specific callbacks (one for content and username)
* 1) secondStatus.on('context:change', function(){
	alert('second status changed');
});
* 2) secondStatus.on('username:change', function(){
	alert('second status changed');
});

most popular: add, remove, destory, change, sync, (also error, but that's higher order)

#now how to sync with server?

collection object
collections deal with multiple objects
model is on the client

status model will do both jobs get db records 
create new instance of model

in bb
-factory go over wire to get data
	-create other objects - individual status

collections acts as factory,
	takes in data pumps out individual statuses

#Collection
var Statuses = Backbone.Collection.extend({
	
});

next set model property {this is why collection comes after model}

var Statuses = Backbone.Collection.extend({
	*model: Status*
});

need to tell end url location too.
collection.url() {where the JSON lives}

var Statuses = Backbone.Collection.extend({
	model: Status
	url: *'/statuses'*
});

#create new statuses collection
var myStatuses = new Statuses

myStatuses.length #=> 0;
myStatuses.fetch() gets the list of statuses
myStatuses.length #=> 4;
myStatuses.each(function(status){
	console.log(status.get('content'));
});
	#prints contents
	myStatuses.toJSON() {gets the raw object instead of the model object}
	returns array


	myStatuses.toJSON()[0].content
	#=> returns single content

	myStatuses.at(0).get('content')
	gets you the attributes

var myStatuses = new Statuses
myStatuses.on('add', function(status){
	alert('Status added with content: ' + status.get('content'));
});

var myStatus = new Status
myStatus.set({ context: "WAAAaaaaaaah", username:"Joaney"})
myStatus.save()

*had to create CREATE in the status contoller*

#def create
		@status = Status.create(status_params)

		respond_to do |f|
			f.json { render json: @status }
		end
	end

myStatus.save()

it works, but it's still broken because of no save. *So we create an update method.*

#def update
		@status = Status.find(params[:id])
		@status.update(status_params)

		respond_to do |f|
			f.json { render json: @status }
		end
	end

#add destroy

def destroy
		@status = Status.find(params[:id])
		@status.destroy

		respond_to do |f|
			f.json { render json: { status: "Hey yo, your 'ish be cool" } }
		end

	end

on Status.js
defaults: {
	username: "Anon",
	content: "Free burrito"
	}
});

defaults if we don't send a default, it will be 'Anon' & 'Free'


#Afternoon Lab
making a school app
name, description, logo

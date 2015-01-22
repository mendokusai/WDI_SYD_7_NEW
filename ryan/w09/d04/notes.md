#Thursday Jan 22 Notes

#Today
* Routers
* Navigation
* Push State
* Portfolios

#Friday
* Portfolios

#backbone routers

define route for homepage and put it in the function
need to kick off the router.
[backbone router](backbonejs.org/#/Router)
when we go from page to page, we want to redraw the correct content

*example*
			var Workspace = Backbone.Router.extend({
			router matches url to function

			routes: {
				"help": "help",
				"search/:query": "search",
				"search/:query/p:page":"search"
			},
			help: function(){
				...
			},
			search: function(query, page){
				...
			}
			});

set up view, get data > scope into routes

home route, filter by username route (rerender list by username only {careful! links break, use special function on router})			
#application.html.erb
*added container around yield bit*

#application.js
$('#container').append(timelineView.el);

**jesus becareful of capitalization**
"Namespacing it" 
#Status.js
var TwitterCloneAPP = TwitterCloneAPP || {};

*change var status = Backbone.Model....*
**to:** TwitterCloneAPP.Status = B...

#Statuses.js
*add line to top*
var TwitterCloneAPP = TwitterCloneAPP || {};

*change model: Statuses* 
to TwitterCloneAPP.Statuses

#application.js
*change line*
var statusesCollection = new Statuses();
*to*
var statusesCollection = new TwitterCloneAPP.Statuses();

#TimelineView.js
*change line top line*
*to*
TwitterCloneAPP.TimelineView

in addStatus function*from*
var statusView = new StatusView({ model: status});
*to*
var statusView = new TwitterCloneAPP.StatusView({ model: status});

#StatusView.js
*same*

#back to application.js
change Timeline View line 
*from*
var timelineView = new TimelineView({ collection: statusesCollection });
*to:*
var timelineView = new TwitterCloneAPP.TimelineView({ collection: statusesCollection });

*add some files*
mkdir app/assets/js/routers
touch app/assets/js/routers/AppRouter.js

#AppRouter.js
var TwitterCloneAPP = TwitterCloneAPP || {};

TwitterCloneAPP.AppRouter = Backboone.Router.extend({
		routes: {
			"": "home" **home route is "" not "/"**
		},
		home: function(){
			*remove these lines from application.js*
			var statusesCollection = new TwitterCloneAPP.Statuses();
			var timelineView = new TwitterCloneAPP.TimelineView({ collection: statusesCollection });

$('#container').append(timelineView.el);
	}
})

#refactor
#application.js
$(function(){
	
});
need to tell backbone to start listing for URL events
*create new router*
$(function(){
	TwitterCloneAPP.router = new TwitterCloneAPP.AppRouter();
	*work with history API in browser*
	Backbone.history.start();

});

#refactor
#AppRouter.js
*add to AppRouter/remove from home: function
statusesCollection: new TwitterCloneAPP.Statuses(),
*add THIS to TimelineView*
TimelineView({ collection: this.statusesCollection });

#####And now the Router works correctly.
	it's organized and event-driven
	event kicks off: we're on the homepage, do this.

#morning Tea
*add route "about"*
routes: {
		"": "home",
		"about": "aboutPage"
	},

touch app/assets/js/templates/about.hbs
#Real simple h1 & p biz

#in routes:
aboutPage: function(){
		$('#container').html(JST['about']())
	}

*can't use url bar to navigate*
use navigate! have to tell backbone that things are changing
#in console
*this takes two args: 'url', { trigger: true }) - triggers the event*
TwitterCloneAPP.router.navigate('about', {trigger: true})

OR we can make an openpage function

openPage: function(url){
		this.navigate(url, {trigger: true});
	},

**3 standardish levels of views**
App View header nav, 
Container View (page view)
Single Item View

*updated routes*
routes: {
		"": "home",
		"about": "aboutPage",
		"*notfound": "home"
		":username": "filterUser"
	},

*create filterUser*
filterUser: function(username){
	*copy from home for the sake of having something initially*
		var timelineView = new TwitterCloneAPP.TimelineView({ collection: this.statusesCollection });
		$('#container').append(timelineView.el);
	}

this new function doesn't do anything yet, because TimelineView doesn't have the correct instruction to *do* anything

#TimelineView.js
*remove from initialize function*
this.collection.fetch();

#AppRouter.js
*add to *home function*
this.collection.fetch();

#Statuses.js
*add function filterByUser*

* this finds messages that match the username

filterByUser: function(username){
		var matchedStatuses = this.filter(function(status){
			return status.get("username") === username;
		});
		this.reset(matchedStatuses);
	}

#back to TimelineView.js
*add reset to initialize*
this.collection.on('reset', this.render, this);
*add render*
render: function(){
		this.collection.each(this.addStatus, this);
	},

#approuter.js
filterUser: function(username){
		var timelineView = new TwitterCloneAPP.TimelineView({ collection: this.statusesCollection });
		$('#container').html(timelineView.el);
		this.statusesCollection.filterByUser(username);
	},

#filter example

var _ = {};
_.filter = function(array, callback){
	var newArray = [];
	for (el in array){
		if(callback(el)){
			newArray.push(el);
		}
	}
	return newArray;
}

var numbers = [5,15,1,456,3];

_.filter(numbers, function(num){
	return num > 10;
});

//[15,456]

_.filter(numbers, function(num){
	return num <= 10;
});

// [5,1,3]

#back to twitterclone
reset in router > reset function in Timelineview > Statuses.

#statuses.js
*fix filter*

	filterByUser: function(username){
		this.fetch().then(function(){
			var matchedStatuses = this.filter(function(status){
			return status.get("username") === username;
		});
		this.reset(matchedStatuses);
	});
	}
});

this approach is inneficient because we HAD the data and now we're requesting it again.

the hack is to assign it to a different variable. when we get the data from the server and keep a copy for filtering

*create a new initialize function*
initialize:function(){
		this.on('sync', this.saveCopy, this);
	}

*then create saveCopy function*
saveCopy: function(){
		this.each(function(status){
			this.previousModels.push(status);
		}, this);
	},
*create previousModels array at top*	
previousModels: [],

#updating filterbyUser
*with underscore*
	var matchedStatuses = _.filter(this.previousModels, function(status){
			return status.get("username") === username;
		});


#after lunch
*getting rid of hash*

#Wednesday jan 21 notes
* morning exercise cards.rb

* backbone views
* portfolio
* internet points

#tonight
* sydJS

#backbone day 3

define which events should be shown.
adding favoriting

creating a view that can rerender things efficiently

outerview
	timeline -show statuses in order of created at
		inside rerender

		like partials
			-status view

app/assets/js/application.js
	*blank out all details from Monday-Tuesday*

mkdir app/assets/js/views

add require_tree to application.js

to /Views
add StatusView.js
add TimelineView.js

#in TimelineView.js:
var TimelineView = Backbone.View.extend({
});

*unless you specify a tagName, backbone renders all templates into divs*

var TimelineView = Backbone.View.extend({
	*could be any element*
	tagName: "div",
	className: "timeline",
	*add template connection*
	template: JST['statuses/timeline'],
	*render function*
	render: function(){
		
	};
});
#add new folders and files for templates
mkdir app/assets/js/templates/statuses
touch app/assets/js/templates/statuses/status.hbs
touch app/assets/js/templates/statuses/timeline.hbs

#now make template for timeline.hbs
{{#each statuses}}
	<div class="status">
		<p>{{context}}</p>
		<p><strong>{{username}}</strong></p>
	</div>
{{/each}}

we want everything ordered by *created_at*
	view needs a collection to work with
		pass in a collection

#app.js
var timelineView = new TimelineView({collection: statusesCollection });		//define the obj we want.

var statusesCollection = new Statuses(); *build this above timelineview*

#TimelineView.js
*inside render function*
render: function(){
		var collection = this.collection.toJSON();
}

#in browser console
statusesCollection.fetch();
*returns statses.*

#in render (to show it's going to work)
console.log(this.template({ statuses: collection }));

*reformated render to...*
render: function(){
	this.template({ 
		statuses: this.collection.toJSON()
	});
}

*this.$el* references the element in the *tagName*

#reformat render again
render: function(){
		this.$el.html(this.template({ 
			statuses: this.collection.toJSON()
		});
		);
	}

#now render to page (in app.js)
$('body').append(timelineView.el);
//instantly renders the div 'timeline' to the body on load.

#in console
statusesCollection.fetch();
then timelineView.render();
and **BOOM** statuses are rendered in the DOM

#in timelineView.js
*this is to automate the fetch*
intialize: function(){
		this.collection.fetch();
		this.collection.on('reset', this.render, this)
	},

#morning tea
app.js> remove render function meat.
*change to*
render: function(){
		this.collection.each(function(status){
			var statusView = new StatusView({ model: status});
		})
	}
	*we're going to pass rendering to StatusView*
#remove template:JST['statuses/timeline']

#in template status.hbs
<p>{{context}}</p>
<p><strong>{{username}}</strong></p>

#StatusView
var StatusView = Backbone.View.extend({
	tagName: 'div',
	className: 'status',
	template: JST['statuses/status'],

	render: function(){
		this.$el.html(
			this.template(
				this.model.toJSON()
			)
		);
	}

});

*return 'this' and then you can method chain-like statusView.render.el();*

#new render in TimelineView.js
render: function(){
		var self = this;
		this.collection.each(function(status){
			var statusView = new StatusView({ model: status});
			statusView.render().el;
		});
	}
*append to DOM-byadding this.$.el.append*
	self.$el.append(statusView.render().el);

	a different way

	render: function(){
		this.collection.each(function(status){
			var statusView = new StatusView({ model: status});
			this.$el.append(statusView.render().el);
		}, this);
	}

*need a listener for changes*

initialize: function(){
		this.model.on('change', this.render, this);
	},

#refactor status render into addStatus
*on TimelineView.js*
	initialize: function(){
		this.collection.fetch();
		this.collection.on('add', this.addStatus, this);
	},

	addStatus: function(status){
		var statusView = new StatusView({ model: status});
			this.$el.append(statusView.render().el);
		}
});

#for remove 
*on StatusView.js*

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	render: function(){
		this.$el.html(
			this.template(
				this.model.toJSON()
			)
		);
		return this;
	},

	remove: function(){
		this.$el.remove();
	}

});

#adding events (adding a favorite button)
*status.hbs*
{{#favorite}} *<<hash kicks off conditional*
<strong>Your Favorite</strong>
{{/favorite}}
<button>Toggle Favorite</button>

#in StatusView.js
*add events*
events: {
		"click button": "toggleFav"
	},

*add function*
toggleFav: function(){
		this.model.set('favorite', !this.model.get('favorite'));
	}
**toggles favorite**


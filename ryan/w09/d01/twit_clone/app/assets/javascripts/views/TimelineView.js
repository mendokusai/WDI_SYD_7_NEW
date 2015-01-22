var TwitterCloneAPP = TwitterCloneAPP || {};

TwitterCloneAPP.TimelineView = Backbone.View.extend({
	tagName: "div",
	className: "timeline",
	// // moving from statuses to status.
	// // don't need this anymore 
	// template: JST['statuses/timeline'],

	
	initialize: function(){
		this.collection.on('add', this.addStatus, this);
		this.collection.on('reset', this.render, this);
	},

	render: function(){
		this.collection.each(this.addStatus, this);
	},

	addStatus: function(status){
		var statusView = new TwitterCloneAPP.StatusView({ model: status});
			this.$el.append(statusView.render().el);
		}
});
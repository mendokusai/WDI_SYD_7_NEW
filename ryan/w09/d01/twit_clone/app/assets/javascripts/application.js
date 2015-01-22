
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree .


var TwitterCloneAPP = TwitterCloneAPP || {};

$(function(){
	TwitterCloneAPP.router = new TwitterCloneAPP.AppRouter();
	Backbone.history.start();
});
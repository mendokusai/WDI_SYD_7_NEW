var TwitterCloneAPP = TwitterCloneAPP || {};

TwitterCloneAPP.Status = Backbone.Model.extend({
	urlRoot: '/statuses',

	defaults: {
		username: "Anon",
		content: "No time for love, Dr. Jones..."
	}
});
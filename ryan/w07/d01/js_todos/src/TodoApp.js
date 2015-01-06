//create constructor first
var TodoApp = function() {
	this.todos = [
		new Todo({text: "Do the dishes"}),
		new Todo({text: "Hang out the washing"}),
		new Todo({text: "Learn Javascript"})
	];
}

TodoApp.prototype.start = function(){
	var todoListView = new TodoListView();
	todoListView.container = document.getElementById("todo-list");
	todoListView.render(this.todos);
}

var Todo = function(text){
	this.text = text;
	this.createdAt = new Date();
}

window.onload = function(){
	var todos = [
		new Todo("Do the dishes"),
		new Todo("Hang Laundry"),
		new Todo("Learn Java")
	];

	var templateString = _.unescape(document.getElementById("todo-template").innerHTML);
	var todoTemplate = _.template(templateString);
	_.each(todos, function(todo){
		document.getElementById("container").innerHTML += todoTemplate(todo);	
	})
	
}



// window.onload = function() {
// 	var templateString = _.unescape(document.getElementById("hello-template").innerHTML);

// 	var helloWorldTemplate = _.template(templateString);
// 	var theHTML = helloWorldTemplate({name: "Jack" });
// 	var moreHTML = helloWorldTemplate({name: "frisky" });
// 	document.getElementById("container").innerHTML = theHTML + moreHTML;
// }
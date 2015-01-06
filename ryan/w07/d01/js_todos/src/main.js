var todoApp;

window.onload = function() {
	todoApp = new TodoApp();
	todoApp.start();
}

// var todoList;

// // 5 function to add classes for todo internal elements
// var createTodoElement = function(todo){
// 	// 5.1 creates todo div
// 	var el = document.createElement('div');
// 	// 5.2 gives div a class
// 	el.className = "todo-item";
// 	// 5.3 creates element p && puts todo text into element
// 	var todoTextElement = document.createElement('p');
// 	todoTextElement.innerHTML = todo.text;

// 	var todoInfoElement = document.createElement('span');
// 	todoInfoElement.innerHTML = "Created at: " +todo.createdAt.toLocaleString();

// 	el.appendChild(todoTextElement);
// 	el.appendChild(todoInfoElement);
// 	// 6  -creates a div with each todo entry
// 	return el;
// }

// // 3 function for processing todos && adding to page
// var render = function(todoList){
// 	var todoListElement = document.getElementById("todo-list");

// 	for (i in todoList){
// 		// 4 take one element, run function
// 		var todoElement = createTodoElement(todoList[i]);
// 		// 7 - adds the element to the main container
// 		todoListElement.appendChild(todoElement);
// 	}
// };

// window.onload = function(){
// 	// 1 - collection of todos
// 	todoList = [
// 		new Todo({text: "Do the dishes"}),
// 		new Todo({text: "Hang out the washing"}),
// 		new Todo({text: "Learn Javascript"})
// 	];
// 	// 2 go to the function for processing!
// 	render(todoList);
// };


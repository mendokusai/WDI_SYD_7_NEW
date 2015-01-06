#To Cover
* Javascript Review
* AJAX
* Build Cool shit

#Things to review
* Functions
* Variable Scope
* Prototypes
* DOM
* Events

subl ~/.bash_profile to get to your bash profile.

*now I've got zsh*
so use: 
subl ~/.zshrc

alias serverdir="ruby -run -e httpd -- -p 3000 ." 

* [Dash](Element)
	Element.innerHTML
	Methods
		Element.appendChild

#todo code-along
*getting element by id*
var todoListElement = document.getElementById("todo-list")


var todoItem = document.createElement('div');
# todoItem = <div></div>

#create classname
todoItem.className = "todo-list";

todoItem.innerHTML = "Do the Dishes";
# todoItem = <div class="todo-list">Do the dishes</div>

#add todoItem to todoList (in dom)
todoListElement.appendChild(todoItem);

#set up click to remove item
todoItem.onclick = function(){
	this.remove();
};

*then we created Todo.js*

# var myTodo = new Todo({text: "do the dishes"});
myTodo
creates => Todo {text: "do the dishes", createdAt: Mon Jan 05 2015 12:44:15 GMT+1100 (AEDT)}

# myTodo.createdAt
Mon Jan 05 2015 12:44:15 GMT+1100 (AEDT)

# myTodo.createdAt.toLocaleString();
"1/5/2015, 12:44:15 PM"

*adding code to main.js*

Here's the first main.js' code

// var todoList;

// var createTodoElement = function(todo){
// 	var el = document.createElement('div');
// 	el.className = "todo-item";
// 	var todoTextElement = document.createElement('p');
// 	todoTextElement.innerHTML = todo.text;
// 	var todoInfoElement = document.createElement('span');
// 	todoInfoElement.innerHTML = "Created at: " +todo.createdAt.toLocaleString();
// 	el.appendChild(todoTextElement);
// 	el.appendChild(todoInfoElement);
// 	return el;
// }

// var render = function(todoList){
// 	var todoListElement = document.getElementById("todo-list");
// 	for (i in todoList){
// 		var todoElement = createTodoElement(todoList[i]);
container
// 		todoListElement.appendChild(todoElement);
// 	}
// };

// window.onload = function(){
// 	todoList = [
// 		new Todo({text: "Do the dishes"}),
// 		new Todo({text: "Hang out the washing"}),
// 		new Todo({text: "Learn Javascript"})
// 	];
// 	render(todoList);
// };

*next here it is broken into smaller files*

#main.js

var todoApp;

window.onload = function() {
	todoApp = new TodoApp();
	todoApp.start();
}

#TodoApp.js

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

#Todo.js

var Todo = function(attributes){
	this.text = attributes.text;
	this.createdAt = new Date();
}


#TodoView

var TodoView = function(todo) {
	this.todo = todo;
}

TodoView.prototype.render = function(){
	var el = document.createElement('div');
	el.className = "todo-item";
	
	var todoTextElement = document.createElement('p');
	todoTextElement.innerHTML = this.todo.text;

	var todoInfoElement = document.createElement('span');
	todoInfoElement.innerHTML = "Created at: " + this.todo.createdAt.toLocaleString();

	el.appendChild(todoTextElement);
	el.appendChild(todoInfoElement);
	
	return el;
}

#TodoListView

var TodoListView = function() {};

TodoListView.prototype.render = function(todos){
	for (i in todos){
		var todoView = new TodoView(todos[i]);
		var todoViewElement = todoView.render();
		this.container.appendChild(todoViewElement);
	}
};

#now we're redoing the ToDo List to break them down properly...

*added to index.html--order is important*
	
	<script src="/src/Todo.js"></script>
  <script src="/src/TodoView.js"></script>
  <script src="/src/TodoListView.js"></script>
  <script src="/src/TodoApp.js"></script>
  <script src="/src/main.js"></script>

#synthesis

OKay. so I've just read through each piece. I understand, i believe, how each line does what it's supposed to.

I'll now paraphrase it all in a way to better come to terms with it:

#main.js
#TodoApp.js
#Todo.js
#TodoView.js
#TodoListView

first, it's important to note that while the ordering above is probably how i'll always think to set this out, the script links will need to go in reverse so that 'main.js' can access everything at the end.

#main.js
main is simple. declares a variable, APP and then, upon load, says variablec APP is a new function TODOAPP, and that APP should use the method start that belongs to TODOAPP.

*this then begets TodoApp.js*
#TodoApp.js
TodoApp declares a function to define what it is. TodoApp is a collection of 3 todo messages, todos that are each new TODO instances with text messages defined.
Next, it defines the method start().
	TODOLISTVIEW is a new instance of TodoListView();
	TodoListView has methods: 
		-container & render(this.todos)
		* I don't have a good way to describe the 'this' aspect other than to say ITs a part that can't be broken down, redefined further.

#Todo.js
This one is simple. It defines TODO as a function requiring atributes.text & attributes.created at.
When it's created, it logs the date. Easy.

#TodoListView
After TODO, TODOLISTVIEW is invoked next. This file declares the variable as a function and through the prototype creates the method render(todos)
* Render takes the argument todos, and runs the collection through a loop. 
	* Each argumentum is run through TodoView() saved as variable TODOVIEW.
	* TODOVIEW.render() is called and assigned to TODOVIEWELEMENT
	* Lastly, TodoListView's container method appends TODOVIEWELEMENT to the container created back in TodoApp.js

#TodoView.js
TodoView is a function requiring a single todo argument.
There's a definition of a prototype method render()
	* creates a div container Element, 'el'
	* gives it a class-name
	* creates a variable (a 'p' Element) for the text
	* adds the todo's text to that variable.
	* creates a variable (a span Element) for the date & uses .toLocaleString() on todo's createdAt
	* appends el with the textElement
	* appends el with the InfoElement

This is what we have.
This renders each of the todos onto the page.

Next, to add a way to enter text and add them to the page, I would guess we'll need a new file called AddTodo.js where it will define how to call TodoListView & TodoView to render the text.

Then, to complete it, a delete method page called DeleteTodo.js that has something like this.todo.remove() which removes the instance by selecting the message's div and removing all bits.

But that's another day.
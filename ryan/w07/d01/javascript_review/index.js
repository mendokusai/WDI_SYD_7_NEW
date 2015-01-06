// Function
var vito = function(greeting){
	console.log(greeting + "Vito");
};

vito("Hey there, ");

// Objects
var myObj = new Object();
myObj.jack = "21";

var myObject = {
	foo: "frank",
	bar: 'buttz',
	displayAges: function(){
		console.log(this.foo);
		console.log(this.bar);
	}
}

myObject.displayAges();
// console.log(myObject["foo"], ",", myObject.foo, ",", myObject.bar);
// // get the keys #	[foo, bar]
// console.log(Object.keys(myObject));

myFunk = function(){
	console.log("hey dere...");
}

myFunk();
console.log("Length: ", myFunk.length);

// Constructor
var Todo  = function(attributes){
	this.text = attributes.text;
	this.createdAt = new Date();
	this.complete = false;
}

var myTodo = new Todo({text: "Do the dishes"});


console.log(myTodo.text);


// var Todo = function() {};

// var myTodo = new Todo();
//myTodo = Todo {}


// Prototypes

Todo.prototype.display = function() {
	console.log("Todo: " + this.text + " - created at " + this.createdAt.toLocaleString());
}

Todo.prototype.checkOff = function(){
	this.complete = !this.complete;
}
// myTodo.displayTodo(); //BAD!
myTodo.display();


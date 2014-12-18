#Javascript


variables.
	var x = "123"

functions

function eatcake() {
	alert("Eat a cake!");
}

eatcake()

*these are the same VVV*
var doTheThing = function(x){
	alert("Do" + x);
}

function doTheThing(x){
	alert("Do" + x);
}

#creating a function and then calling it
(function(){})()
(function(){alert("does this work?");})() <these last two call it>

#array
[1,2,3][0]

var successOrFailure = function(didSucceed, success, failure){
	if (didSucceed){
	success();
	} else {
	failure();
  }
}

successOrFailure(
false, 
)

(function() {
	
})()

switch(x) {
	default:
		alert("Screw X!");
	case 1:
		alert("X is one");
		break;
	case 5:
		alert("X is five");
		break;
}

*if you don't use break it will 'fall through'*
*(sometimes that's preferable...)*


#loops

while (counter < 4) {
	console.log(counter);
	counter += 1;
}


for (var x = 0; x < 10; x++){
	peanutbutter[x];
}

for (y in myArray){
	console.log(myArray[y]);
}

#morning tea

variable scope

callbacks

setTimeout()
	take a number in miliseconds (1000 = 1s)
	takes a function

setTimeout(function() {alert("It worked");}, 5000)

var callback = function() {
	alert("It worked");
}

setTimeout(callback, 1000);

*same as splat in ruby*
(function(){console.log(arguments)})(1,2,3,4,5) 


#variable scope

var x = 5

function printX(){
	console.log(x);
}
# x = 5


function printX(){
	x = 10;
	console.log(x);
	}
# x = 10


*to not have this happen, use**var***

function printX(){
	var x = 10;
	console.log(x);
}
# console.log(x) == 10
# x = 5

(function(){
	var x = 10;
	console.log(x);
})()

*use this to keep things safe from third-party libraries, etc.*

**never change global state**

(function(){
	var doTheThing = function() {
	alert("Dance!");
	}
	doTheThing();
})()

#this

var y = 10;
var z = 4;

var x = function(){
	var y = 11;
	z = 4.5;

	function(){
		var y = 12;
		z = 4.25;
		function(){
			var y = 13;
			z = 4.225;
			};
		};
		return [y, x]
	}

#steve talk
Steve Gilles - Lookahead
ruby community
@stevelikesoyou

rails camp?
ruby Australia?

passion, projects, presence

twitter
github
blog 
portfolio
linkedIn

[webdirections - sydney](http://www.webdirections.org/)

rubyconf - feb

rubyonrails oceanic mailing list
[available mentors](https://github.com/rails-oceania/roro/wiki/Available-mentors)

rubyAU
railsgirls
cocoheads - tomorrow Atlasian

tdd at interviews,
focus on readme

coding challenge 1-day-2-days
	check blog posts on taking tests
	blog.lookahead.com.au
#end steve talk


#prototypal inheritance

var jack = {firstName: "Jack", lastName: "Hambone"}

jack.firstName = "Jack"

var car = new Object()
*is equal to*
var car = {}

car.drive = function() {
	console.log("I'm driving");
}

car.drive = function() {
	console.log(this.name+ " is driving");
}

var car = {
	name: "Bessy",
	drive = function() {
		console.log(this.name+ " is driving");
	}
}

var Person = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

var jack = new Person("Jack", "Hamblin")

#change prototype
Person.prototype.walk = function(){
	console.log(this.firstName + " is walking");	
}
*jack inherrits **walk** from person*
jack.walk();

jack.walk = function(){
	console.log(STRUTTIN');
}

var Car = function(name, make, model) {
	this.name = name
	this.make = make
	this.model = model
	drive = function(){
	this.name + " is driving"
}
}


delete Car.prototype.drive

#homework

#JQUERY


$(function(){
	$(document).on('click', function(){
	alert("Body Clicked!");
	});
	$("#show_me").on("click", function(e){
		alert("Button_clicked");
		e.stopPropagation(); <== this stops the body-click action.
	});
});

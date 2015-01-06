//person
// has attributes
//console.log(person.walk) - took a step
//console.log(person.talk) - "hello world"

var Person = function(attributes){
	this.name = attributes.name;
	this.age = attributes.age;
	this.gender = attributes.gender;
}

var newGuy = new Person({
	name: "CoolGuy",
	age: "50",
	gender: "mixed"
});

Person.prototype.walk = function(){
	console.log("I take TWO steps so you best step off.");
};

Person.prototype.talk = function(){
	console.log("Hey wirl, what's shakin'");
};

newGuy.walk();
newGuy.talk();

newGuy.talk = function(){
	console.log("You know what, I don't have to say nothing!");
}

console.log(newGuy.name + " says:");
newGuy.talk();

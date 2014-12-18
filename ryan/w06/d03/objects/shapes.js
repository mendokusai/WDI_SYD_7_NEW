var Shape = function(length, width){
	self.length = length;
	self.width = width;
}

Shape.isSquare = function(){
		if (length === width){
		console.log("Your shape is a square");
		} else {
			console.log("Your shape is not a square");
		}
	}

Shape.area = function(){
	console.log("The area of the shape is " + length * width)
}

Shape.perimeter = function(){
	console.log("The Perimeter of the shape is " + 2 * length * width)
}

var Triangle = new Shape(2,2,1);
//var square = new Shapes();

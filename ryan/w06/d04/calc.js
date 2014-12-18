var number1, number2;

var performOperation = function() {
// Get value from number1 and number
	number1 = parseInt(document.getElementById("number_one").value);
	number2 = parseInt(document.getElementById("number_two").value);
	var operation = document.getElementById("operation").value;

	var sum;
	if (operation == "add"){
		return sum = number1 + number2;
	} else if (operation == "subtract"){
		return sum = number1 - number2;
	} else if (operation == "multiply"){
		return sum = number1 * number2;
	}else if (operation == "divide"){
		return sum = number1 / number2;
	}
}
	

document.forms[0].onsubmit = function() {
	var result = performOperation();
	document.getElementById("result_space").innerHTML =  "<h1>" + result + "</h1>";
}


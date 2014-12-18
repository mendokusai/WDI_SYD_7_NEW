var total1 = "0", total2 = "0", number1, number2, second = false, complete = false, operator;

function button(num){
		var number = String(num);
		if (second == true) {
			if (total2 == "0"){
				total2 = number;
				$('#display').empty();
				$('#display').append("<h1>" + total2 + "</h1>");
			}else{
			total2 += number;
			$('#display').empty();
			$('#display').append("<h1>" + total2 + "</h1>");
			}
		} else if (complete == true){
			complete = false;
			total2 = "0";
			total1 = number;
		}	else{
			if (total1 == "0"){
				total1 = number;
				$('#display').empty();
				$('#display').append("<h1>" + total1 + "</h1>");
			}else{
			total1 += number;
			$('#display').empty();
			$('#display').append("<h1>" + total1 + "</h1>");
			}
		}
	}

$(function(){
	//$('#display').append("<h1>"+total+"</h1>");
	$('#clear').on('click', function(){
		total1 = "0";
		total2 = "0";
		second = false;
		complete = false;
		$('#display').empty();
		$('#display').append("<h1>" + total1 + "</h1>");
	});

	$('#1').on('click', function(){
		button(1);
	});

	$('#2').on('click', function(){
		button(2);
	});

	$('#3').on('click', function(){
		button(3);
	});

	$('#4').on('click', function(){
		button(4);
	});

	$('#5').on('click', function(){
		button(5);
	});

	$('#6').on('click', function(){
		button(6);
	});

	$('#7').on('click', function(){
		button(7);
	});

	$('#8').on('click', function(){
		button(8);
	});

	$('#9').on('click', function(){
		button(9);
	});

	$('#0').on('click', function(){
		button(0);
	});



	
	$('#add').on('click', function(){
		if (second == false){
			number1 = parseInt(total1);
			second = true;
			operator = "add"
			$('#display').empty();
			$('#display').append("<h1>" + total1 + "+" + "</h1>");
		}
	});
	$('#subtract').on('click', function(){
		if (second == false){
			number1 = parseInt(total1);
			second = true;
			operator = "subtract"
			$('#display').empty();
			$('#display').append("<h1>" + total1 + "-" + "</h1>");
		}
	});

$('#multiply').on('click', function(){
		if (second == false){
			number1 = parseInt(total1);
			second = true;
			operator = "multiply"
			$('#display').empty();
			$('#display').append("<h1>" + total1 + "*" + "</h1>");
		}
	});

$('#divide').on('click', function(){
		if (second == false){
			number1 = parseInt(total1);
			second = true;
			operator = "divide"
			$('#display').empty();
			$('#display').append("<h1>" + total1 + "/" + "</h1>");
		}
	});

	$('#enter').on('click', function(){
		//clears on second enter-press
		if (complete == true){
			total1 = "0";
			total2 = "0";
			complete = false;
			second = false;
			$('#display').empty();
			$('#display').append("<h1>" + total1 +"</h1>");
			//normal action
		} else if (second == true){
			number2 = parseInt(total2);
			if (operator == "add"){
				result = number1 + number2;
			} else if (operator == "subtract"){
				result = number1 - number2;
			} else if (operator == "multiply"){
				result = number1 * number2;
			} else if (operator == "divide"){
				if (number2 == 0){
					result = "*error*";
				}else{
					result = number1 / number2;
				}
			}
			$('#display').empty();
			$('#display').append("<h1>" + result +"</h1>");
		complete = true;
		}

	});
})
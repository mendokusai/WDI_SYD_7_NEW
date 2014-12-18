// for(var i = 1; i < 100; i++){
// 	if (i % 3 == 0 && i % 5 == 0){
// 		console.log("Fizzbuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	}
// 	else{
// 		console.log(i)
// 	}
// }

// //recursive version without loop

// function fizzbuzz(n){
// 	if (n % 3 == 0 && n % 5 == 0){
// 		console.log("Fizzbuzz");
// 	} else if (n % 3 == 0){
// 		console.log("Fizz");
// 	} else if (n % 5 == 0){
// 		console.log("Buzz");
// 	} else{
// 	console.log(n);
// 	}
// 	if (n != 100) {
// 		fizzbuzz(++n);
// 	}
// }

// fizzbuzz(1);

function fz(n){
	n % 3 == 0 && n % 5 ==0? console.log("Fizzbuzz") : n % 3 == 0? console.log("Fizz") : n % 5 == 0? console.log("Buzz") : console.log(n);
	n++;
	if (n != 100){
		fz(++n);
	}
}

fz(1);
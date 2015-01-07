//Global Variables
var gamesize;
var $card;
var gameover = false;

//Time that increments in the game
var timerId = 0,
    time = 0;

function updateTimer(time){
	if (gameover == false ){
	$('#here').text(time);
	};
}

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//

function removeCards(visibleCards){
			$("#" + visibleCards[1]).removeClass('active').children().delay(3000).hide();
			$("#" + visibleCards[3]).removeClass('active').children().delay(3000).hide();
}

$(function() {
	var visibleCards = [];
	var foundCards = [];

	$('#small').on('click', function(){
		startGame(lettersSmall);
	});

	$('#medium').on('click', function(){
		startGame(lettersMedium);
	});

	$('#large').on('click', function(){
		startGame(lettersLarge);
	});

	$('#content #game').on('hover', 'div', function(){
		$(this).toggleClass('hover');
	});

	$('#content #game').on('click', 'div', function(){
		time += 1;
		updateTimer(time);

		var $card = $(this);
		$card.addClass("active");
		$card.children().show();
		var visibleLetter = $card.children().text();
		visibleCards.push(visibleLetter) 
		visibleCards.push($card.attr('id'));
		console.log(visibleCards);

		if (visibleCards.length > 4 && visibleCards[0] != visibleCards[2]){
				removeCards(visibleCards);

			visibleCards = [];
		} else if (visibleCards.length == 4 && visibleCards[0] == visibleCards[2]){
			$("#" + visibleCards[1]).addClass('found');
			$("#" + visibleCards[3]).addClass('found');
			foundCards.push(visibleCards[1]);
			foundCards.push(visibleCards[3]);
			console.log(foundCards.length);

			visibleCards = []; 
		};

		if (foundCards.length == gamesize){
			
			$('found').toggleClass('won');
			$('#title').addClass('won');
			if (gameover == false){
			$('#here').append('<br><h1>You Win!</h1>');
			};
			gameover = true;
		};

	});

	

});




// Initializes the game and creates the board
function startGame(lettersize) {
	gamesize = lettersize.length;
	console.log(gamesize);
	var shuffled = _.shuffle(lettersize);
	for (i in shuffled){
		$card = $('#game').append("<div id="+i+" class=\"column\"><span id=\"span" + i +"\" style=\"display: none;\">" + shuffled[i] + "</span></div>");
	};
}

// Flips a card and checks for a match
function cardClick() {


}

//Add hoverclass to cards.
function hovering(){
	$(this).toggleClass("hover");
}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}
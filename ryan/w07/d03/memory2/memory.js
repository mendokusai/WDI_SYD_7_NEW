//Global Variables



//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters = _.shuffle(lettersSmall);

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {

	var showCard = [];
	
	$('#game').on('click', 'div', function(){
		var index = parseInt($(this).attr('data-id'));
		var whichLetter = letters[index];
		var $card = $(this).text(whichLetter);
		$card.addClass("active");
		$card.removeClass('hidden');
		
		var cardData = $card.text()
		showCard.push(cardData);
		console.log($card); 
		console.log(showCard.length);
		if (showCard.length > 2){
			showCard = [];
			$("div active").toggleClass("hidden");
		};
	});

	$('#small').on('click', function(){
		var $game = $('#game').html("");
		_.each(letters, function(letter, index) {
			$('<div><span id="' + letter + '"></span></div>')
			.addClass('column')
			.addClass('hidden')
			.appendTo($game)
			.attr("data-id", index)
		});
	});

});

// Initializes the game and creates the board
function startGame() {

}

// Flips a card and checks for a match
function cardClick() {

}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}
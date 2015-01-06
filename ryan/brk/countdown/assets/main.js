
var count = 10, timerInterval;

function countdown(){
	if (count < 2) window.clearInterval(timerInterval);
	$('#countdown_clock').empty();
	count = count - 1;
	$('#countdown_clock').append("<p>" + count + "</p>");
}


$(function(){
	// $('#reset').hide()
	$('#countdown_clock').append("<p>" + count + "</p>");
	$('#reset').on('click', function(){
		window.clearInterval(timerInterval);
		$('#countdown_clock').empty();
		count = 10;
		$('#countdown_clock').append("<p>" + count + "</p>");
		// $('#reset').hide();	
		// $('#timer').show();	
	});
	$('#timer').on('click', function(){
		// $('#timer').hide();
		// $('reset').show();
		timerInterval = window.setInterval(countdown, 1000);
	});
	
});
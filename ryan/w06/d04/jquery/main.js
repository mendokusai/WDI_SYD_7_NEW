//javbascrip!

$(function(){
	$('#show_me').on('click', function(){
		$('#green_square').animate({
			width: "1000px",
			height: "20px",
			opacity: 0.5,

		});
	});
});
var validate = function(value, selector){
	if (value === ""){
			$(selector).siblings('span').text("Required");
			return false;
		} else {
			$(selector).siblings('span').text("");
			return true;
		}
}

$(function() {
	$('#the-form').on('submit', function(event){
		var firstName = $('#user_first_name').val();
		var lastName = $('#user_last_name').val();
		
		var firstValid = validate(firstName, '#user_first_name');
		var lastValid = validate(lastName, '#user_last_name');
		
		if(!firstValid || !lastValid){
			event.preventDefault();
		}
		
	});
  // listen for the submit event on the form
  // if there isn't at least 1 character in a field
  // show an error in the span next to that field in the HTML
});
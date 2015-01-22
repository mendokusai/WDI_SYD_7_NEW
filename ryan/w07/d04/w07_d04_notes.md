[Marxico](http://marxi.co/)

http://marxi.co/

#morning exercise

#after morning tea
*adding ajax to rails*

/todos/2/json #->doesn't work
	need to add multiple view handlers

	model responds to toJSON...

	specify how we would like it to respond

# respond_to

in controller: 
		respond_to do |format|
			format.html 
		end

		^^this is the default setting.

		for json:

		respond_to do |format|
			format.html
			format.json { render json: @todos }
		end

[this creates an json string]( http://localhost:3000/todos.json)


$.getJSON('/todos', function(data) {console.log(data) })

>>> gets you the data into the Javascript


posting to make a new via json

$.post("/todos", { todo: { text: "Do the dishes", notes: "Blah blah", completed: false } }, function(data) {
  console.log(data);
}, "json");

there is no post json, so you need to set the post-type at the end of the post.



name-spaces.... todo contains text with things 

#whats the difference between a form-generation and an ajax request/post?

form: grabs each form value via paramters
ajax: you specifiy the details and add itto the json string

only difference is how you get the data.

form sends to server directly
ajax works in the background.
	

	if you have multiple entries with the same field, the last-most matters (like CSS);

# made a new html form

now the JS

	creating a js handler for submit...
*checkboxes are a bit of a headached*
var completed = $('#todo-completed:checked').val() || 0;

var completed = $('#todo-completed').prop('checked'); //this one actually returns true/false

<input checked type="checkbox" id="todo-completed">

for checked or not - displays checked box

now the post command:
	$.post('/todos', 
		{ todo: 
			{ text: text, 
				notes: notes, 
				completed: completed }
			}, 
			function(data){
				console.log(data);
		}, "json");

// todo[test]=Do+the+dishes&todo[notes]=Get+Liquid

post gives url and takes data and turns it until query string, creates a request (like browser) query string is the body of the request to server, goes to server and is interpreted by the controller as a create object

would be used like this.

for update

$.post('/todos/2', 
		{ todo: 
			{ text: text, 
				notes: notes, 
				completed: completed },
				_method: "PATCH"
			}, 
			function(data){
				$('body').append('<p>' + data.text + '</p>');
		}, "json");


*function(data) part is the response from the server, when the server responds, it fills in the details server data - not data from the json string in the post request.*

$.ajax({
	url: "/todos",
	method: "POST", //doesn't matter 
	dataType: "json",  //where it goes
	data: {
		todo: {
			text: "Do the dishes", 
			notes: "Get liquid",
			completed: false
		}
	},
	success: function(data) {
		console.log(data);
	},
	failure: function(data){

	}
})


#delete requests do not need to info inside.

update as long as you have the first one.

data: {
	_method: 'DELETE'
}

you don't need to go to /posts/new || /posts/edit with json , just /posts


#tonight's homework, adding delete
add a delete button
	deletes from the server (jack says 6 lines of code... bullshit.): 30 minutes

*[put, patch, delete] requres: _method: <command>*
	deletes from the dom

don't do adding editing 


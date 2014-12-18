#THE DOM

Body -
	-Header
		-h1
		-h2
		-nav
	
	-main
		-h3
		-div

	-footer
		-ul
		-p


		You can do all sorts of things in the dom.
#open new window!
	window.open('http://facebook.com', '_blank');

alert(document.forms[0].children[0].value);

function validateJack(formField) {
	if (formField.value != "Jack") {
	formField.setAttribute("style", "border: 1px solid red;");
	}
}

validateJack(document.forms[0].children[0]);

#main.js form validation

document.forms[0].onsubmit = function() {
	var nameField = document.getElementById("name");
	var emailField = document.getElementById("email");

	validatesPresence(nameField);
	validatesPresence(emailField);

}

var validatesPresence = function(formField){
	if (formField.value.length === 0){
		formField.setAttribute("style", "border: 2px solid red;");
	} else {
		formField.setAttribute("style", "border: 1px solid black;");
	}
}

*have to set up action on each element for it to work*

document.getElementByID('email').onfocus = function(){}

coolernshit JS stuff:

		http://codepen.io/suffick/pen/KrAwx
[12:22 PM] Joel Hampton: http://bl.ocks.org/mbostock/4636377
[12:22 PM] Jack Jeffress: http://codepen.io/suffick/full/KrAwx/
[12:24 PM] Jack Jeffress: http://codepen.io/jackrugile/pen/acAgx
[12:26 PM] Jack Jeffress: http://jeremybouny.fr/ocean/demo/
[12:28 PM] Jack Jeffress: http://wiki.polyfra.me/#
		http://complexity.zone/webgl_threejs_surface_graph/
		http://www.alexeyrudenko.com/cc/js/014/
		http://www.patatap.com/
[12:32 PM] Jack Jeffress: http://www.marky.pl/vector-field/
		http://philogb.github.io/page/temperature-anomalies/ - Make sure you change the name
		date sorry
		http://nxxcxx.github.io/Neural-Network/
		Change the numbers on the right
[12:34 PM] Jack Jeffress: http://lo-th.github.io/3d.city/index.html
[12:34 PM] Jack Jeffress: http://auduno.github.io/clmtrackr/examples/facesubstitution.html - this is pretty amazing
[12:36 PM] Jack Jeffress: http://lo-th.github.io/Oimo.js/index.html
		https://www.buildwithchrome.com/
		http://hellorun.helloenjoy.com/


		code climate for git hub

pivotal tracker

rollbar
recurly
new relic
pingdom
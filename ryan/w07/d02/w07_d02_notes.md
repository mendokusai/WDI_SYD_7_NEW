#using underscore

[Using Underscore](http://underscorejs.org/#template)

#template uses
var thisTemplate = _.template(<%= variable %>);
	and then 
	var exampleUsingTemplate = thisTemplate({variable: "THis"});

#then we made a template in the html
used it instead.
	<div id="hello-template" style="display: none;">
		<p>Hello <%= name %></p>
	</div>

*and then we turned it into a script*

	<script type="application/template" id="hello-template">
		<p>Hello <%= name %></p>
	</script>

#JQuery

$(function() {
	var $heading = $('h1');
})


#brice lunch talk

#browser prefexes
-webkit-box-shadow:
-moz-box-shadow:
-ms-box-shadow:
-o-box-shadow:
box-shadow:

Sass, less, stylus  - css preprocessors

*use.*

box-sizingL border-box; //this is the great thing

flexbox
	display: flex; //neat, check it out

100vh - takes full height of the page viewport

vw (viewport(screen) width)


rgba(red, green, blue, alpha); # 0 transparent, 1 = full opacity

modernizer Javascript, checks for support and adds classes with css properties specific.

background-size: 100% auto; //(x, y)
background-size: cover; //max size first and it does cropping

box-shadow -for shadows

box-radius for circle, corner rounding.

gradients...
	background: linear-gradient(to right, color, 0%, color 100%); //straight left to right
	colorzila.com/gradient-editor

@font-face {
	font-family:::
}

font awesome -for web icons...
	<i class="fa fa-paper-plane-o"></i>

	iconmoon?

transform:rotate(45deg);

skew...

transition: background 1s ease-in-out 2s;
$('box').click(function(){
	js: this.toggleclass('slideRight');	
})


#box{
	position: absolute;
	width,
	height,
	left
	background: color
	transition: all 3s ease-in-out;
}

#box.slideRight {
	left: 50%;
}

keyframes

@keyframes slide {
	0% {left: 0;}
	50% {left: 50%;}
	100% {left: 100%;}
}

div {
	animation: ;
}

bouncejs.com //animations

animate.css

transtion: all .25s ease-in-out;
filter: blur(xpx) saturate(20%)

cammycam - neat video thing

node webkit -make browser native apps

there are ruby gems for css preprocessing....

#afternoon

working on 

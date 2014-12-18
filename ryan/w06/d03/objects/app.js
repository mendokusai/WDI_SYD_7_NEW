var App = function(){

}

App.prototype.boot = function() {
	this.pullInitialData();
}

App.prototype.pullInitialData = function(){
	//alert("Pulling data from " + this.dataURL);
}

var app = new App();
app.dataURL = "http://localhost:3000/puppies";
app.boot();
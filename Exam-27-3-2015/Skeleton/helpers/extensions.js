Function.prototype.extend = function extend(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
}

var actorId = 1;
var genreId = 1;
var movieId = 1;
var reviewId = 1;
var theatreId = 1;
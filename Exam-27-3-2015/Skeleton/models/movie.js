var imdb = imdb || {};

(function (scope) {
	function Movie (title, length, rating, country) {
		this.title = title;
		this.length = length;
		this.rating = rating;
		this.country = country;
		this._actors = [];
		this._reviews = [];
		this._id = movieId;
		movieId += 1;
	};

	Movie.prototype.addActor = function (actor) {
		this._actors.push(actor);
	};

	Movie.prototype.getActor = function () {
		return this._actors;
	};

	Movie.prototype.addReview = function (review) {
		this._reviews.push(review);
	};

	Movie.prototype.deleteReview = function (review) {
		this._reviews.delete(review);
	};

	Movie.prototype.deleteReviewById = function (reviewId) {
		this._reviews.forEach(function (review) {
			if (review._id === reviewId) {
				this._reviews.delete(review);
			};
		});
	};

	Movie.prototype.getReviews = function () {
		return this._reviews;
	};

	scope._Movie = Movie;

	scope.getMovie =  function (title, length, rating, country) {
		return new Movie(title, length, rating, country);
	};
	
}(imdb));

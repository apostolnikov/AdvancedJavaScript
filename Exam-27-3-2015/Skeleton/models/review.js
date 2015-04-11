var imdb = imdb || {};

(function (scope) {
	function Review (author, content, date) {
		this.author = author;
		this.content = content;
		this.date = date;
		this._id = reviewId;
		reviewId += 1;
	};

	scope._Review = Review;

	scope.getReview =  function (author, content, date) {
		return new Review(author, content, date);
	};	
}(imdb));
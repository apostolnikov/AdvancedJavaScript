var imdb = imdb || {};

(function (scope) {
	function Theatre (name, length, rating, country) {
		scope._Movie.call(this, length, rating, country);
		this.name = name;
		this.isPupet = false;
		this._id = theatreId;
		theatreId += 1;
	};

	Theatre.extend(scope._Movie);
	scope._Theatre = Theatre;
	scope.getTheatre =  function (name, length, rating, country) {
		return new Theatre(name, length, rating, country);
	};

}(imdb));
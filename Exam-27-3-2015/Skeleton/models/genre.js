var imdb = imdb || {};

(function (scope) {
	function Genre (name) {
		this.name = name;
		this._movies = [];
		this._id = genreId;
		genreId += 1;
	}

	Genre.prototype.addMovie = function (movie) {
		this._movies.push(movie);
	};

	Genre.prototype.deleteMovie = function (movie) {
		this._movies.delete(movie);
	};

	Genre.prototype.deleteMovieById = function (movieId) {
		this._movies.forEach(function (movie) {
			if (movie._id === movieId) {
				this._movies.delete(movie);
			};
		});
	};

	Genre.prototype.getMovies = function () {
		return this._movies;
	};

	scope._Genre = Genre;

	scope.getGenre =  function (name) {
		return new Genre(name);
	};
}(imdb));

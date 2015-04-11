var models = models || {};

(function (scope) {
	function User (username, fullName, balance) {
		this.username = username;
		this.fullName = fullName;
		this._balance = balance;
		this._shoppingCart = scope.getShoppingCart(); // vzimame instanciq na shoppingCart
	}

	User.prototype.addItemToCart = function(item) {
		this._shoppingCart.addItem(item); // tui kato gornoto ne e masiv, ne polzvam push a funkciqta ot klasa categori, add item
	};

	scope.getUser = function (username, fullName, balance) {
		return new User(username, fullName, balance);
	}
	
}(models))
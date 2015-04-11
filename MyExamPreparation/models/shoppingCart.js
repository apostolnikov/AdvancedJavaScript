var models = models || {};

(function (scope) {
	function ShoppingCart () {
		this._items = [];
	}

	ShoppingCart.prototype.addItem = function(item) {
		this._items.push(item);
	};

	ShoppingCart.prototype.getTotalPrice = function (argument) {
		var totalPrice = 0;
		this._items.forEach(function (item) {      // funkcionalen forEach obikalq po vsichki itemi i im vzima cenata
			totalPrice += item.price;
		});
		return totalPrice;
	}

	scope.getShoppingCart = function () {
		return new ShoppingCart();
	}
}(models));
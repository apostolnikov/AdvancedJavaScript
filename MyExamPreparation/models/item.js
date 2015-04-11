var models = models || {};

(function (scope) {
	function Item (title, description, price) {
		this.title = title;
		this.description = description;
		this.price = price;
		this._customerReviews = [];
	}

	Item.prototype.addCustomerReview = function addCustomerReview (customerReview) {
		this._customerReviews.push(customerReview);
	}

	Item.prototype.getCustomerReview = function getCustomerReview () {
		return this._customerReviews;
	}
	
	scope._Item = Item; // item klasa da moje da bude nasledqvan ot drugite

	scope.getItem = function (title, description, price) {
		return new Item(title, description, price);
	}
}(models));
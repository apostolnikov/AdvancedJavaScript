String.prototype.endsWith = function(value) {
	var substringLength = value.length;
	var thisLength = this.length;

	if (substringLength > thisLength) {
		return false;
	};

	var howMuchLettersNeedToBeRemooved = thisLength - substringLength;
	var endsString = this.substring(howMuchLettersNeedToBeRemooved);

	if (endsString === value) {
		return true;
	} else {
		return false;
	}

}

String.prototype.left = function(num) {
	var result = '';
	for (var i = 0; i < num; i++) {
		result += this[i];
	};
	return result;
}

String.prototype.right = function(num) {
	var thisLength = this.length;
	var howMuchLettersNeedToBeRemooved = thisLength - num;
	var endsString = this.substring(howMuchLettersNeedToBeRemooved);
	return endsString;
}

String.prototype.padLeft = function(count, character) {
	var ch = character || ' ';
	var result = '';
	for (var i = 0; i < count; i++) {
		result += ch;
	};
	result += this;
	return result;
}

String.prototype.padRight = function(count, character) {
	var ch = character || ' ';
	var result = this;
	for (var i = 0; i < count; i++) {
		result += ch;
	};
	return result;
}

String.prototype.repeat = function(count) {
	var result = '';
	for (var i = 0; i < count; i++) {
		result += this;
	};
	return result;
}
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));




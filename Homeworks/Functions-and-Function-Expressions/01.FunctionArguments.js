var printArgsInfo = function () {
	var result = '';
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i] + ' (' + typeof(arguments[i]) + ')' + '\n';		
	}
	return result;
}


console.log(printArgsInfo(2, 3, 2.5, -110.5564, false));

console.log(printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}));
var printArgsInfo = function () {
	var result = '';
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i] + ' (' + typeof(arguments[i]) + ')' + '\n';		
	}
	return result;
}
console.log(printArgsInfo.call());
console.log(printArgsInfo.call(2, 3, 2.5, -110.5564, false));


console.log(printArgsInfo.apply());
console.log(printArgsInfo.apply([2, 3, 2.5, -110.5564, false]));

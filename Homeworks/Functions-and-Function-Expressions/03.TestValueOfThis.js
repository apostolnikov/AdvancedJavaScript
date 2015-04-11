var testContext = function () {
	console.log(this.object);
}

testContext();

var testFuncTwo = function () {
	testContext();
}

testFuncCaller();

var testFuncThree = new Function('testContext()', 'console.log(testContext());');
testFuncThree();
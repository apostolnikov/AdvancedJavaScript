function add(a) {

  var sum = a

  function f(b) {
    sum += b
    return f
  }

  f.toString = function() { return sum }

  return f
}

console.log(add(1)(1)(1)(1)(1).toString());  //5

console.log(add(1)(0)(-1)(-1).toString());  //-1

var addTwo = add(2); 
console.log(addTwo(3)(5).toString());  //10

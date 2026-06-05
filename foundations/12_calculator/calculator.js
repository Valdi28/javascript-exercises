const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((acc, number) => {
    return acc += number
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, number) => {
    return acc *= number;
  }, 1)
};

const power = function(base, exp) {
  return base**exp;
};


const factorial = function(number) {
	// 10! = 10*9*8*7*6*5*4*3*2*1
  let factorial = 1;

  for (let i = 0; i<number; i++) {
    factorial *= (number - i);
  }

  return factorial
};

console.log(factorial(4));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

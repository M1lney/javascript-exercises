const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0)
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1)
};

const power = function(a, b) {
  let amount = a;
  for (let i = 0; i < b-1; i++) {
    amount = amount * a;
  }
  return amount;
};

const factorial = function(a) {
	let result = 1;
  if (a === 0) {
    return 1;
  }
  for (let i = a; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

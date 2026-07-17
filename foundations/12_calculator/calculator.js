const add = function(a,b) {
	let s = a + b;
  return s;
};

const subtract = function(a,b) {
	let d = a - b;
  return d;
};

const sum = function(arr) {
 
  let total = 0;        

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];  
  }

  return total;

	
};

const multiply = function(arr) {
let total = 1;
for (let i = 0; i < arr.length; i++){
  total = total * arr[i]
}
return total;
};

const power = function(b,e) {
  let p = b**e
	return p;
};

const factorial = function(a) {
	let total = 1
  for (let i = 1; i <= a; i++){
    total *= i 
  }
  return total;
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

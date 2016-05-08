// Rest operator.
// ...x is the rest. Use as last param
/* function sum(...numbers) {
  // return numbers.reduce(function (prev, current) {
  //   return prev + current;
  // });

  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));*/

// Spread operator.
// Inverse function of rest:

function sum(x, y) {
  return x + y;
}

let nums = [1, 2];

console.log(sum(...nums)); // Will split into multiple params.

const names = ['John', 'Sandy'];
// Declaration of names is immutable but the contents can be modified
// using push, pop etc.

// Force immutability with Object.freeze()

function fire(bool) {
  if (bool) {
    // var foo = 'bar'; // var is function level
    let foo = 'bar'; // let is block level

    console.log(foo);
  } else {
    console.log(foo);
  }
}

fire(true);

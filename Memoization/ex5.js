// Shlomi Ben-Shushan & Gal Ben-Arush

// Finonacci as an example of a non-memoized recursive function.
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoize optimization technique implementation.
function memoize(func) {
  let cache = {};
  return (x) => {
    if (x in cache) return cache[x];
    let result = func(x);
    cache[x] = result;
    return result;
  };
}

// Memoize activation.
// Not that the pointer "fib" points to a new (different) function after this line.
fib = memoize(fib);

// Test.
var num = 80;
var start = performance.now();
var result = fib(num);
var runtime = ((performance.now() - start) / 1000).toFixed(4);
console.log("Function:", Object.keys({fib})[0]);
console.log("Input:   ", num);
console.log("Output:  ", result);
console.log("Runtime: ", runtime, "seconds.");

// Shlomi Ben-Shushan & Gal Ben-Arush

// This code is an example of using JavaScript closure by using the IIFE function to implement a counter.

// IIFE Counter implementation:
(function() {
    var counter = 0;
    (myCounter = function() {
        return counter++;
    })();
})();

// Test logs:
console.log(myCounter())
console.log(myCounter())
counter = 0
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
// Shlomi Ben-Shushan & Gal Ben-Arush

// This code is an example of using JavaScript closure to control functions outputs.

// Code example a.
// function c(i) {
// 	return function() {return i};
// }
// var f = [];
// for (var i = 0; i < 10; i++)
// 		f[i] = c(i);
// for (var i = 0; i < 10; i++)
// 	console.log(f[i]+"", f[i]())

// Code example b.
// function c() {
// 	var f = [];
// 	for(var i=0; i<10; i++) {
// 		f[i] = function(){return i};
// 	}
// 	return f;
// }
// var f = c();
// for(var j=0; j<10; j++)
// 	console.log(f[j]+":",f[j]())

// The following code should print numbers fron 0 to 9, like example b, thanks to the usage of closures.
function c() {
	var f = [];
	for (var i = 0; i < 10; i++) {
		f[i] = (function(i) {
			return function() {return i};
		})(i);
	}
	return f;
}
var f = c();

for (var j = 0; j < 10; j++) 
	console.log(f[j]+":",f[j]())
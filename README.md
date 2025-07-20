# Programming Language Theory

This repository contains solutions for the assignments of Programming Languages Theory course I took at Bar-Ilan University.
The course was about programming languages implementations and designs, and about compilers, but the recitations of the course were done through the use of JavaScript.

The repository is divided to three parts:

#### Closures

* Closures are a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

* For further reading: https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4

* In this section you can find the implementation of IIFE functions that rely on the JavaScript Closures.

#### Concurrency

* JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java. Also, this model allows JavaScript Concurrency.

* For further reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop, and https://www.w3schools.com/js/js_ajax_intro.asp

* In this section you can find different code snippets that make requests to several servers - concurrently or sequentially, with AJAX or with XHR, from the browser or by Node.JS.

#### Memoization

* Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

* For further reading: https://en.wikipedia.org/wiki/Memoization

* In this section you can find an implementation of a generic memoization function that gets a recursive non-memoized function such as Fibonacci, and turn it into a memoized-function that makes the calculations in linear time instead of polynomial thanks to memoization/caching technique.

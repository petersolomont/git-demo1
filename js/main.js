/**
 * main.js
 */
"use strict";

console.log("Hello git demo1");
const mapReduce = (primeMultiplier, start, ...data) => {
    return data.map(n => n * primeMultiplier)
        .reduce((accum, curr) => accum + curr, start);
};
console.log(mapReduce(7, 10, 1, 2, 3, 4, 5));

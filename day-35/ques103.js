"use strict";
// Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() < 0.5;
}
const randomBool = getRandomBoolean();
console.log(randomBool);
// Output: true or false

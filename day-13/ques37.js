"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The size of shirt is ${size} and the message printed on it is "${message}".`);
}
// For Large Shirt
make_shirt();
// for Medium Shirt
make_shirt("medium");
// For Small Shirt
make_shirt("small", "TypeScript is Awesome!");

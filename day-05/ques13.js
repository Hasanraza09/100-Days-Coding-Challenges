"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favTransports = ["Audi e-tron GT", "Toyota Corolla", "Honda CG 125", "Yamaha YZF-R1", "Vespa Primavera"];
favTransports.forEach(mode => {
    console.log(`I would like to own a ${mode}.`);
});

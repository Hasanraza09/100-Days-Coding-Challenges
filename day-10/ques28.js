"use strict";
let age = 18;
if (age < 2) {
    console.log("The Person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The Person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The Person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The Person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The Person is an adult.");
}
else {
    console.log("The Person is an elder.");
}

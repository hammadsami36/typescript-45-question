// Tests for equality and inequality with strings
console.log("Equality test:", "Alisha" === "Alisha");
console.log("InEquality test:", "Alisha" !== "Iqra");
// Tests using the lower case function
console.log("lower case test:", "ALISHA".toLowerCase() === "alisha");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
console.log("Equality test:", 1000 === 1000);
console.log("Inequality test", 10 !== 9);
console.log("greater than test", 10000 > 100);
console.log("less than test", 10 < 100);
console.log("greater than and equals to test", 10 >= 10);
console.log("less than and equals to test", 5 <= 10);
// Tests using "and" and "or" operators
console.log("and operators  test", true && true);
console.log("or operator test ", true || false);
// Test whether an item is in a array
var car = [1, 2, 3];
console.log("test number", car.includes(3));
// Test whether an item is not in a array
var car1 = [1, 2, 3];
console.log("test number", !car.includes(6));

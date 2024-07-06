// lower case
var personName = "Alisha";
console.log("lower case:", personName.toLowerCase());
// upper case
console.log("upper case:", personName.toLocaleUpperCase());
// title case
console.log("title case:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
